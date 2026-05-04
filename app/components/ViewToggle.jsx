'use client';

export default function ViewToggle({ view, onViewChange }) {
  return (
    <div className="flex gap-2 mb-6">
      <button
        onClick={() => onViewChange('grid')}
        className={`px-4 py-2 rounded border transition-colors ${
          view === 'grid'
            ? 'bg-cyan-600 border-cyan-500 text-white'
            : 'bg-slate-800 border-slate-700 text-gray-300 hover:border-cyan-500'
        }`}
      >
        <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 6a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6z"></path>
        </svg>
        Grid View
      </button>
      <button
        onClick={() => onViewChange('table')}
        className={`px-4 py-2 rounded border transition-colors ${
          view === 'table'
            ? 'bg-cyan-600 border-cyan-500 text-white'
            : 'bg-slate-800 border-slate-700 text-gray-300 hover:border-cyan-500'
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
