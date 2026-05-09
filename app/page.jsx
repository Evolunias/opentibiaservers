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
  const [view, setView] = useState('table');
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
    <main className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <Filters onFiltersChange={handleFiltersChange} onSearch={handleSearch} />

        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {servers.length > 0 ? `${totalServers} Servers` : 'No Servers Found'}
            </h2>
            {filters.search && (
              <p className="text-gray-600 text-xs mt-1">Searching: "{filters.search}"</p>
            )}
          </div>
          <ViewToggle view={view} onViewChange={setView} />
        </div>

        {error && (
          <div className="bg-red-50 border border-red-300 text-red-800 px-4 py-3 rounded mb-6 text-sm">
            {error}
          </div>
        )}

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="w-8 h-8 border-3 border-gray-300 border-t-gray-900 rounded-full animate-spin mx-auto mb-3"></div>
              <p className="text-gray-600 text-sm">Loading servers...</p>
            </div>
          </div>
        ) : servers.length === 0 ? (
          <div className="bg-gray-50 border border-gray-300 rounded p-8 text-center">
            <p className="text-gray-700">No servers match your filters</p>
            <button
              onClick={() => {
                setFilters({});
                setCurrentPage(1);
              }}
              className="mt-3 px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 font-medium text-sm"
            >
              Clear Filters
            </button>
          </div>
        ) : view === 'grid' ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
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
            <div className="border border-gray-300 rounded overflow-hidden mb-8">
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
