import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-players-online-uk');
}

export default function RealMapPlayersOnlineUkKeywordPage() {
  return <StaticKeywordPage slug="real-map-players-online-uk" />;
}
