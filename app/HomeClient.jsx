'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Filters from './components/Filters';
import ViewToggle from './components/ViewToggle';
import ServerCard from './components/ServerCard';
import ServerList from './components/ServerList';
import Pagination from './components/Pagination';
import SyncStatus from './components/SyncStatus';
import FeaturedServerAd from './components/FeaturedServerAd';
import { fetchServers, supabase } from '@/lib/supabase';

const PAGE_SIZE = 25;
const REFRESH_INTERVAL_MS = Number(process.env.NEXT_PUBLIC_SERVER_REFRESH_INTERVAL_MS || 30000);
const defaultFilters = {
  is_online: true,
  sort: 'players',
};
const curatedLinks = [
  { href: '/antica', label: 'Antica', detail: 'Official-world history and OT alternatives' },
  { href: '/nova', label: 'Nova', detail: 'Fresh-start world history and OT alternatives' },
  { href: '/otservlist', label: 'otservlist.org', detail: 'Server-list comparison and directory context' },
  { href: '/otland', label: 'OTLand', detail: 'Community, Server Gala, and development resources' },
  { href: '/cyntara', label: 'Cyntara', detail: 'Highrate server guide and live comparisons' },
  { href: '/evolunia', label: 'Evolunia', detail: 'Rules, community fit, and similar servers' },
  { href: '/otmadness', label: 'OTMadness', detail: 'High-EXP server guide and activity signals' },
];

export default function HomeClient({ initialServers = [], initialTotal = 0, initialError = null }) {
  const [servers, setServers] = useState(initialServers);
  const [loading, setLoading] = useState(initialServers.length === 0 && !initialError);
  const [error, setError] = useState(initialError);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalServers, setTotalServers] = useState(initialTotal);
  const [view, setView] = useState('table');
  const [filters, setFilters] = useState(defaultFilters);
  const [lastRefreshedAt, setLastRefreshedAt] = useState(null);

  const summary = useMemo(() => {
    const visiblePlayers = servers.reduce((sum, server) => sum + Number(server.players_online || 0), 0);
    const topServer = servers[0];
    const sources = new Set(servers.map((server) => server.source).filter(Boolean));

    return {
      visiblePlayers,
      topServer,
      sources: sources.size,
    };
  }, [servers]);

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
        setServers(data);
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

  useEffect(() => {
    const interval = setInterval(() => {
      loadServers({ silent: true });
    }, REFRESH_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [loadServers]);

  useEffect(() => {
    const channel = supabase
      .channel('servers-live-directory')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'servers' },
        () => loadServers({ silent: true })
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [loadServers]);

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
                Compare active Open Tibia worlds with live players, source-linked records, owner-managed profiles,
                screenshots, uptime history, reviews, launch signals, and community discussion in one searchable hub.
              </p>
              <div className="mt-6 grid gap-3 text-sm text-slate-200 md:grid-cols-2">
                <div className="signal-card">
                  Live public rows become permanent, searchable server records.
                </div>
                <div className="signal-card">
                  Claimed listings add websites, Discord, launchers, screenshots, FAQs, and support details.
                </div>
              </div>
            </div>

            <div className="dashboard-orb motion-rise motion-delay-1">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-white">Data Source</span>
                <SyncStatus />
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="telemetry-tile">
                  <div className="text-xl font-bold text-white">{totalServers.toLocaleString()}</div>
                  <div className="text-xs text-slate-400">Matched</div>
                </div>
                <div className="telemetry-tile">
                  <div className="text-xl font-bold text-white">{summary.visiblePlayers.toLocaleString()}</div>
                  <div className="text-xs text-slate-400">Visible Players</div>
                </div>
                <div className="telemetry-tile">
                  <div className="text-xl font-bold text-white">{summary.sources}</div>
                  <div className="text-xs text-slate-400">Sources</div>
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

        <section className="glass-panel mb-6 p-4 motion-rise">
          <div className="mb-3">
            <h2 className="text-lg font-bold text-white">Featured Open Tibia Guides</h2>
            <p className="text-sm text-slate-300">
              Useful pages for official worlds, OT communities, popular servers, and players comparing where to play next.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {curatedLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="guide-link-card"
              >
                <div className="text-sm font-bold text-white">{link.label}</div>
                <div className="mt-1 text-xs text-slate-300">{link.detail}</div>
              </a>
            ))}
          </div>
        </section>

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
            <p className="text-slate-300 text-sm">Reset filters or run a source sync to populate new records.</p>
          </div>
        ) : view === 'grid' ? (
          <>
            <div className="animated-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
              {servers.map((server) => (
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
              <ServerList servers={servers} />
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
