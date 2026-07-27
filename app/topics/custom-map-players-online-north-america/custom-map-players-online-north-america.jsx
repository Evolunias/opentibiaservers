import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-players-online-north-america');
}

export default function CustomMapPlayersOnlineNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-players-online-north-america" />;
}
