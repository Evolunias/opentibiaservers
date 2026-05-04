'use client';

import { useState } from 'react';

export default function Filters({ onFiltersChange, onSearch }) {
  const [search, setSearch] = useState('');
  const [worldType, setWorldType] = useState('');
  const [location, setLocation] = useState('');
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    onSearch(value);
  };

  const handleFilterChange = () => {
    onFiltersChange({
      world_type: worldType || undefined,
      location: location || undefined,
      is_online: showOnlineOnly ? true : undefined,
      search,
    });
  };

  return (
    <div className="bg-white border-2 border-gray-300 rounded-xl p-6 mb-6 shadow-md hover:shadow-lg transition-all" style={{
      borderImageSource: 'linear-gradient(135deg, rgba(0, 102, 255, 0.3), rgba(168, 85, 247, 0.3))',
      borderRadius: '0.75rem',
      borderImage: 'linear-gradient(135deg, rgba(0, 102, 255, 0.3), rgba(168, 85, 247, 0.3)) 1'
    }}>
      <h2 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">🔍 Filters & Search</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Search */}
        <div className="lg:col-span-2">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Search by Name or IP</label>
          <input
            type="text"
            placeholder="Search servers..."
            value={search}
            onChange={handleSearchChange}
            className="w-full bg-white border-2 border-gray-300 rounded-lg px-3 py-2 text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-all focus:shadow-lg"
          />
        </div>

        {/* World Type */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">World Type</label>
          <select
            value={worldType}
            onChange={(e) => {
              setWorldType(e.target.value);
              handleFilterChange();
            }}
            className="w-full bg-white border-2 border-gray-300 rounded-lg px-3 py-2 text-gray-800 focus:border-blue-500 focus:outline-none transition-all focus:shadow-lg"
          >
            <option value="">All Types</option>
            <option value="PVP">PVP</option>
            <option value="Non-PVP">Non-PVP</option>
            <option value="PVP-Enforced">PVP-Enforced</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
          <select
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
              handleFilterChange();
            }}
            className="w-full bg-white border-2 border-gray-300 rounded-lg px-3 py-2 text-gray-800 focus:border-blue-500 focus:outline-none transition-all focus:shadow-lg"
          >
            <option value="">All Locations</option>
            <option value="USA">USA</option>
            <option value="Europe">Europe</option>
            <option value="Germany">Germany</option>
            <option value="Brazil">Brazil</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Online Only */}
        <div className="flex items-end">
          <label className="flex items-center gap-2 text-gray-700 cursor-pointer h-10 px-4 bg-white border-2 border-green-400 rounded-lg hover:bg-green-50 hover:shadow-md transition-all font-semibold">
            <input
              type="checkbox"
              checked={showOnlineOnly}
              onChange={(e) => {
                setShowOnlineOnly(e.target.checked);
                handleFilterChange();
              }}
              className="w-4 h-4 accent-green-600"
            />
            <span className="text-sm">Online Only</span>
          </label>
        </div>
      </div>
    </div>
  );
}
