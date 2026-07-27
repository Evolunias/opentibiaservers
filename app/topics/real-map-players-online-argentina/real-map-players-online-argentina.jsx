import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-players-online-argentina');
}

export default function RealMapPlayersOnlineArgentinaKeywordPage() {
  return <StaticKeywordPage slug="real-map-players-online-argentina" />;
}
