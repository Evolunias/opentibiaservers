import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-players-online-south-america');
}

export default function RealMapPlayersOnlineSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-players-online-south-america" />;
}
