import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-players-online-canada');
}

export default function RealMapPlayersOnlineCanadaKeywordPage() {
  return <StaticKeywordPage slug="real-map-players-online-canada" />;
}
