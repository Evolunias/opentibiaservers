import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-with-active-players-server-latin-america');
}

export default function VenoreotWithActivePlayersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-with-active-players-server-latin-america" />;
}
