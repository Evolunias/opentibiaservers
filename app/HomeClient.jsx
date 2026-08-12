'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Filters from './components/Filters';
import ViewToggle from './components/ViewToggle';
import ServerCard from './components/ServerCard';
import ServerList from './components/ServerList';
import Pagination from './components/Pagination';
import FeaturedServerAd from './components/FeaturedServerAd';
import { fetchServers } from '@/lib/supabase';
import { prioritizeFeaturedServer } from '@/lib/presentation-metrics';

const PAGE_SIZE = 25;
const defaultFilters = {
  is_online: true,
  sort: 'players',
};

export default function HomeClient({ initialServers = [], initialTotal = 0, initialError = null }) {
  const [servers, setServers] = useState(initialServers);
  const [loading, setLoading] = useState(initialServers.length === 0 && !initialError);
  const [error, setError] = useState(initialError);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalServers, setTotalServers] = useState(initialTotal);
  const [view, setView] = useState('table');
  const [filters, setFilters] = useState(defaultFilters);
  const [lastRefreshedAt, setLastRefreshedAt] = useState(null);
  const displayServers = useMemo(() => prioritizeFeaturedServer(servers), [servers]);

  const summary = useMemo(() => {
    const visiblePlayers = displayServers.reduce((sum, server) => sum + Number(server.players_online || 0), 0);
    const topServer = displayServers[0];
    const featuredServer = displayServers.find((server) => {
      const haystack = [server.slug, server.name, server.host, server.website_url, server.external_launch_url]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      return haystack.includes('evomanias');
    }) || null;

    return {
      visiblePlayers,
      topServer,
      featuredServer,
    };
  }, [displayServers]);

  const loadServers = useCallback(async ({ silent = false } = {}) => {
    if (!silent) setLoading(true);
    setError(null);

    try {
      const { servers: data, total, error: fetchError } = await fetchServers(
        filters,
        currentPage,
        PAGE_SIZE
      );

      if (fetchError) {
        setError(fetchError);
        setServers([]);
        setTotalServers(0);
      } else {
        setServers(prioritizeFeaturedServer(data));
        setTotalServers(total);
        setLastRefreshedAt(new Date());
      }
    } catch (err) {
      setError('An unexpected error occurred while loading servers.');
      console.error(err);
    } finally {
      if (!silent) setLoading(false);
    }
  }, [currentPage, filters]);

  useEffect(() => {
    if (initialServers.length && currentPage === 1 && filters === defaultFilters) return;
    loadServers();
  }, [currentPage, filters, initialServers.length, loadServers]);

  const handleFiltersChange = (nextFilters) => {
    setFilters({ ...defaultFilters, ...nextFilters });
    setCurrentPage(1);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="ambient-field" aria-hidden="true" />
      <section className="hero-shell border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 items-start">
            <div className="motion-rise">
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-300 mb-2">
                OpenTibiaServers.com
              </p>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">
                The living Open Tibia server atlas
              </h1>
              <p className="text-base md:text-lg text-slate-300 max-w-3xl">
                Compare active Open Tibia worlds with current players, owner-managed profiles, screenshots,
                uptime history, launch signals, reviews, and community discussion in one searchable hub.
              </p>
              <div className="mt-6 grid gap-3 text-sm text-slate-200 md:grid-cols-2">
                <div className="signal-card">
                  Searchable directory records stay visible.
                </div>
                <div className="signal-card">
                  Evomanias is highlighted as the featured server.
                </div>
              </div>
            </div>

            <div className="dashboard-orb motion-rise motion-delay-1">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-white">At a glance</span>
                <span className="text-xs font-bold text-white">Manual updates</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-center">
                <div className="telemetry-tile">
                  <div className="text-xl font-bold text-white">{totalServers.toLocaleString()}</div>
                  <div className="text-xs text-slate-400">Matched</div>
                </div>
                <div className="telemetry-tile">
                  <div className="text-xl font-bold text-white">{summary.visiblePlayers.toLocaleString()}</div>
                  <div className="text-xs text-slate-400">Visible Players</div>
                </div>
              </div>
              {summary.topServer ? (
                <div className="mt-3 text-xs text-slate-400">
                  Top visible: <span className="font-semibold text-white">{summary.topServer.name}</span>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section id="servers" className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <FeaturedServerAd placement="inline" />

        <Filters onFiltersChange={handleFiltersChange} onSearch={() => {}} />

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-white">
              {loading ? 'Loading servers' : `${totalServers.toLocaleString()} servers found`}
            </h2>
            <p className="text-sm text-slate-300">
              Sorted by {filters.sort || 'players'} with {filters.is_online ? 'online servers only' : 'online and offline servers'}.
              {lastRefreshedAt ? ` Last refreshed ${lastRefreshedAt.toLocaleTimeString()}.` : ''}
            </p>
          </div>
          <ViewToggle view={view} onViewChange={setView} />
        </div>

        {error ? (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded mb-4 text-sm">
            {error}
          </div>
        ) : null}

        {loading ? (
          <div className="glass-panel p-10 text-center">
            <div className="shimmer-stack mx-auto mb-4" />
            <p className="text-slate-300">Loading server records...</p>
          </div>
        ) : servers.length === 0 ? (
          <div className="glass-panel p-10 text-center">
            <p className="text-white font-semibold mb-2">No servers match these filters.</p>
            <p className="text-slate-300 text-sm">Reset filters or add records manually to populate new entries.</p>
          </div>
        ) : view === 'grid' ? (
          <>
            <div className="animated-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
              {displayServers.map((server) => (
                <ServerCard key={server.id} server={server} />
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              totalItems={totalServers}
              pageSize={PAGE_SIZE}
              onPageChange={setCurrentPage}
            />
          </>
        ) : (
          <>
            <div className="glass-panel overflow-hidden mb-6">
              <ServerList servers={displayServers} />
            </div>
            <Pagination
              currentPage={currentPage}
              totalItems={totalServers}
              pageSize={PAGE_SIZE}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </section>
    </main>
  );
}
