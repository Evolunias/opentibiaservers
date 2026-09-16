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
  sort: 'peak',
};
const sortLabels = {
  peak: 'highest recorded player count',
  votes: 'most votes',
  votes_today: 'votes today',
  rating: 'rating',
  uptime: 'uptime',
  newest: 'recently updated',
  name: 'name',
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
    <main className="directory-shell min-h-screen">
      <div className="directory-shell__glow" aria-hidden="true" />

      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-8 pb-4">
        <header className="directory-masthead mb-6">
          <p className="directory-masthead__eyebrow">Open Tibia server directory</p>
          <h1 className="directory-masthead__title">Open Tibia Servers</h1>
          <p className="directory-masthead__dek">
            Find and compare OT servers by peak players, client version, location, uptime, ratings, and votes.
          </p>
        </header>

        <FeaturedServerAd placement="inline" />
      </section>

      <section id="servers" className="relative z-10 max-w-7xl mx-auto px-6 pb-10">
        <Filters onFiltersChange={handleFiltersChange} onSearch={() => {}} />

        <div className="directory-toolbar flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-4 mt-2">
          <div>
            <h2 className="text-xl font-bold tracking-tight">
              {loading ? 'Loading servers' : `${totalServers.toLocaleString()} servers found`}
            </h2>
            <p className="text-sm directory-toolbar__meta">
              Sorted by {sortLabels[filters.sort] || 'highest recorded player count'}.
              {lastRefreshedAt ? ` Last updated ${lastRefreshedAt.toLocaleTimeString()}.` : ''}
            </p>
          </div>
          <ViewToggle view={view} onViewChange={setView} />
        </div>

        {error ? (
          <div className="directory-alert directory-alert--error mb-4 text-sm">
            {error}
          </div>
        ) : null}

        {loading ? (
          <div className="glass-panel p-10 text-center">
            <div className="pulse-bar mx-auto mb-4" />
            <p className="directory-toolbar__meta">Loading server records...</p>
          </div>
        ) : displayServers.length === 0 ? (
          <div className="glass-panel p-10 text-center">
            <p className="font-semibold mb-2">No servers match these filters.</p>
            <p className="directory-toolbar__meta text-sm">Reset filters or broaden your search to see more listings.</p>
          </div>
        ) : view === 'grid' ? (
          <>
            <div className="directory-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
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
