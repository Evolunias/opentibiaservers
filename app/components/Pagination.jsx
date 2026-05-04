'use client';

export default function Pagination({ currentPage, totalItems, pageSize, onPageChange }) {
  const totalPages = Math.ceil(totalItems / pageSize);

  if (totalPages <= 1) return null;

  const pages = [];
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, currentPage + 2);

  if (startPage > 1) {
    pages.push(1);
    if (startPage > 2) pages.push('...');
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) pages.push('...');
    pages.push(totalPages);
  }

  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-slate-800 border border-slate-700 rounded text-gray-300 hover:border-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Previous
      </button>

      <div className="flex gap-1">
        {pages.map((page, idx) => (
          <button
            key={idx}
            onClick={() => typeof page === 'number' && onPageChange(page)}
            disabled={page === '...' || page === currentPage}
            className={`px-3 py-2 rounded transition-colors ${
              page === currentPage
                ? 'bg-cyan-600 text-white border border-cyan-500'
                : page === '...'
                ? 'text-gray-500 cursor-default'
                : 'bg-slate-800 border border-slate-700 text-gray-300 hover:border-cyan-500'
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-slate-800 border border-slate-700 rounded text-gray-300 hover:border-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Next
      </button>

      <span className="text-sm text-gray-400 ml-4">
        Page {currentPage} of {totalPages} • {totalItems} total
      </span>
    </div>
  );
}
