import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-players-online-argentina');
}

export default function CustomMapPlayersOnlineArgentinaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-players-online-argentina" />;
}
