'use client';

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Filters from './components/Filters';
import ViewToggle from './components/ViewToggle';
import ServerCard from './components/ServerCard';
import ServerList from './components/ServerList';
import Pagination from './components/Pagination';
import { fetchServers } from '@/lib/supabase';

const PAGE_SIZE = 12;

export default function Home() {
  const [servers, setServers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalServers, setTotalServers] = useState(0);
  const [view, setView] = useState('grid');
  const [filters, setFilters] = useState({});

  useEffect(() => {
    loadServers();
  }, [currentPage, filters]);

  const loadServers = async () => {
    setLoading(true);
    setError(null);
    try {
      const { servers: data, total, error: fetchError } = await fetchServers(
        filters,
        currentPage,
        PAGE_SIZE
      );

      if (fetchError) {
        setError('Failed to load servers. Please check your Supabase connection.');
        setServers([]);
      } else {
        setServers(data);
        setTotalServers(total);
      }
    } catch (err) {
      setError('An error occurred while fetching servers');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleSearch = (searchTerm) => {
    setFilters(prev => ({ ...prev, search: searchTerm }));
    setCurrentPage(1);
  };

  return (
    <main className="min-h-screen bg-slate-900">
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <Filters onFiltersChange={handleFiltersChange} onSearch={handleSearch} />

        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white">
              {servers.length > 0 ? `Found ${totalServers} Servers` : 'No Servers Found'}
            </h2>
            {filters.search && (
              <p className="text-gray-400 text-sm mt-1">Searching for: <span className="text-cyan-400">"{filters.search}"</span></p>
            )}
          </div>
          <ViewToggle view={view} onViewChange={setView} />
        </div>

        {error && (
          <div className="bg-red-900 border border-red-700 text-red-100 px-6 py-4 rounded mb-6">
            {error}
          </div>
        )}

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-slate-700 border-t-cyan-500 rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-400">Loading servers...</p>
            </div>
          </div>
        ) : servers.length === 0 ? (
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-12 text-center">
            <p className="text-gray-400 text-lg">No servers match your filters</p>
            <button
              onClick={() => {
                setFilters({});
                setCurrentPage(1);
              }}
              className="mt-4 px-6 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : view === 'grid' ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {servers.map(server => (
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
            <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden mb-12">
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
      </div>
    </main>
  );
}
