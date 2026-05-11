import Header from '../components/Header';

export const metadata = {
  title: "Evomanias - Tibia Server",
  description: "Evomanias - The ultimate Tibia experience",
};

export default function EvomaniasLayout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {children}
    </div>
  );
}
