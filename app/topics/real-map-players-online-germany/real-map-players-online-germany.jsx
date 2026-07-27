import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-players-online-germany');
}

export default function RealMapPlayersOnlineGermanyKeywordPage() {
  return <StaticKeywordPage slug="real-map-players-online-germany" />;
}
