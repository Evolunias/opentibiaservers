import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-players-online-usa');
}

export default function CustomMapPlayersOnlineUsaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-players-online-usa" />;
}
