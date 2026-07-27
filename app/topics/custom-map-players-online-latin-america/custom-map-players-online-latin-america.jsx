import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-players-online-latin-america');
}

export default function CustomMapPlayersOnlineLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-players-online-latin-america" />;
}
