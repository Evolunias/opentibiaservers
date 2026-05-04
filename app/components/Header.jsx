export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-800 border-b border-blue-700">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center font-bold text-blue-900">
            T
          </div>
          <h1 className="text-3xl font-bold text-white">Tibia Servers</h1>
        </div>
        <p className="text-blue-100">Browse and compare open Tibia servers with comprehensive stats and details</p>
      </div>
    </header>
  );
}
