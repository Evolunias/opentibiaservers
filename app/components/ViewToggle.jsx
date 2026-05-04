'use client';

export default function ViewToggle({ view, onViewChange }) {
  return (
    <div className="flex gap-2 mb-6">
      <button
        onClick={() => onViewChange('grid')}
        className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 font-semibold ${
          view === 'grid'
            ? 'bg-gradient-to-r from-blue-500 to-purple-500 border-blue-600 text-white shadow-lg'
            : 'bg-white border-gray-300 text-gray-700 hover:border-blue-400 hover:shadow-md'
        }`}
      >
        <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 6a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6z"></path>
        </svg>
        Grid View
      </button>
      <button
        onClick={() => onViewChange('table')}
        className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 font-semibold ${
          view === 'table'
            ? 'bg-gradient-to-r from-blue-500 to-purple-500 border-blue-600 text-white shadow-lg'
            : 'bg-white border-gray-300 text-gray-700 hover:border-blue-400 hover:shadow-md'
        }`}
      >
        <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 6a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6z"></path>
        </svg>
        Table View
      </button>
    </div>
  );
}
