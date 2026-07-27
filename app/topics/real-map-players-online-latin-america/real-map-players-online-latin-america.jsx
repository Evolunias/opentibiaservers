import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-players-online-latin-america');
}

export default function RealMapPlayersOnlineLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-players-online-latin-america" />;
}
