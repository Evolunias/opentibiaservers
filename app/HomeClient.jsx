'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import Filters from './components/Filters';
import ViewToggle from './components/ViewToggle';
import ServerCard from './components/ServerCard';
import ServerList from './components/ServerList';
import Pagination from './components/Pagination';
import SyncStatus from './components/SyncStatus';
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
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <Header />

      <section className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                OpenTibiaServers.com
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-950 mb-3">
                Open Tibia server directory
              </h1>
              <p className="text-base text-gray-600 max-w-3xl">
                Search active Open Tibia servers with live listing data, official home pages, owner-managed profiles,
                screenshots, contact links, reviews, uptime history, and community discussion mapped into one database.
              </p>
              <div className="mt-4 grid gap-2 text-sm text-gray-700 md:grid-cols-2">
                <div className="border border-gray-200 bg-gray-50 px-3 py-2">
                  Public source rows become permanent, searchable server records.
                </div>
                <div className="border border-gray-200 bg-gray-50 px-3 py-2">
                  Claimed listings can add websites, Discord, launchers, screenshots, FAQs, and support details.
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded bg-gray-50 p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-gray-900">Data Source</span>
                <SyncStatus />
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-white border border-gray-200 rounded p-3">
                  <div className="text-xl font-bold text-gray-950">{totalServers.toLocaleString()}</div>
                  <div className="text-xs text-gray-500">Matched</div>
                </div>
                <div className="bg-white border border-gray-200 rounded p-3">
                  <div className="text-xl font-bold text-gray-950">{summary.visiblePlayers.toLocaleString()}</div>
                  <div className="text-xs text-gray-500">Visible Players</div>
                </div>
                <div className="bg-white border border-gray-200 rounded p-3">
                  <div className="text-xl font-bold text-gray-950">{summary.sources}</div>
                  <div className="text-xs text-gray-500">Sources</div>
                </div>
              </div>
              {summary.topServer ? (
                <div className="mt-3 text-xs text-gray-600">
                  Top visible: <span className="font-semibold text-gray-900">{summary.topServer.name}</span>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section id="servers" className="max-w-7xl mx-auto px-6 py-6">
        <section className="mb-6 border border-gray-200 bg-white p-4">
          <div className="mb-3">
            <h2 className="text-lg font-bold text-gray-950">Featured Open Tibia Guides</h2>
            <p className="text-sm text-gray-600">
              Useful pages for official worlds, OT communities, popular servers, and players comparing where to play next.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {curatedLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded border border-gray-200 p-3 hover:border-gray-400 hover:no-underline"
              >
                <div className="text-sm font-bold text-gray-950">{link.label}</div>
                <div className="mt-1 text-xs text-gray-600">{link.detail}</div>
              </a>
            ))}
          </div>
        </section>

        <Filters onFiltersChange={handleFiltersChange} onSearch={() => {}} />

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-gray-950">
              {loading ? 'Loading servers' : `${totalServers.toLocaleString()} servers found`}
            </h2>
            <p className="text-sm text-gray-600">
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
          <div className="bg-white border border-gray-200 rounded p-10 text-center">
            <div className="w-8 h-8 border-2 border-gray-200 border-t-gray-900 rounded-full animate-spin mx-auto mb-3" />
            <p className="text-gray-600">Loading server records...</p>
          </div>
        ) : servers.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded p-10 text-center">
            <p className="text-gray-900 font-semibold mb-2">No servers match these filters.</p>
            <p className="text-gray-600 text-sm">Reset filters or run a source sync to populate new records.</p>
          </div>
        ) : view === 'grid' ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
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
            <div className="border border-gray-200 rounded overflow-hidden mb-6 shadow-sm">
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
