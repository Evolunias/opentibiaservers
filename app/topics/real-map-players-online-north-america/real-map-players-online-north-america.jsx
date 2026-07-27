import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-players-online-north-america');
}

export default function RealMapPlayersOnlineNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-players-online-north-america" />;
}
