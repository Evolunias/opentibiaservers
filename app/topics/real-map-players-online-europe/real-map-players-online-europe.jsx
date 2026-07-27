import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-players-online-europe');
}

export default function RealMapPlayersOnlineEuropeKeywordPage() {
  return <StaticKeywordPage slug="real-map-players-online-europe" />;
}
