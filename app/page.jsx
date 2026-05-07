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
            <h2 className="text-2xl font-bold text-gray-900">
              {servers.length > 0 ? `Found ${totalServers} Servers` : 'No Servers Found'}
            </h2>
            {filters.search && (
              <p className="text-gray-600 text-sm mt-1">Searching for: <span className="text-blue-600 font-semibold">"{filters.search}"</span></p>
            )}
          </div>
          <ViewToggle view={view} onViewChange={setView} />
        </div>

        {error && (
          <div className="bg-red-50 border border-red-300 text-red-800 px-6 py-4 rounded-lg mb-6 shadow-sm">
            {error}
          </div>
        )}

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Loading servers...</p>
            </div>
          </div>
        ) : servers.length === 0 ? (
          <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-300 rounded-lg p-12 text-center shadow-sm">
            <p className="text-gray-700 text-lg">No servers match your filters</p>
            <button
              onClick={() => {
                setFilters({});
                setCurrentPage(1);
              }}
              className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
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
            <div className="border-2 border-gray-300 rounded-lg overflow-hidden mb-12 shadow-sm">
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
