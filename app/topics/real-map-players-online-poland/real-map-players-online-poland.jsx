import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-players-online-poland');
}

export default function RealMapPlayersOnlinePolandKeywordPage() {
  return <StaticKeywordPage slug="real-map-players-online-poland" />;
}
