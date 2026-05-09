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
    <div className="bg-white border border-gray-300 rounded p-4 mb-6">
      <h2 className="text-base font-bold text-gray-900 mb-4">Filters</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
        {/* Search */}
        <div className="lg:col-span-2">
          <label className="block text-xs font-semibold text-gray-700 mb-1">Search</label>
          <input
            type="text"
            placeholder="Name or IP..."
            value={search}
            onChange={handleSearchChange}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
          />
        </div>

        {/* World Type */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">World Type</label>
          <select
            value={worldType}
            onChange={(e) => {
              setWorldType(e.target.value);
              handleFilterChange();
            }}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
          >
            <option value="">All Types</option>
            <option value="PVP">PVP</option>
            <option value="Non-PVP">Non-PVP</option>
            <option value="PVP-Enforced">PVP-Enforced</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">Location</label>
          <select
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
              handleFilterChange();
            }}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
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
          <label className="flex items-center gap-2 text-gray-700 cursor-pointer font-semibold text-sm">
            <input
              type="checkbox"
              checked={showOnlineOnly}
              onChange={(e) => {
                setShowOnlineOnly(e.target.checked);
                handleFilterChange();
              }}
              className="w-4 h-4"
            />
            <span>Online Only</span>
          </label>
        </div>
      </div>
    </div>
  );
}
