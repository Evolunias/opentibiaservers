import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-with-active-players-server-north-america');
}

export default function VenoreotWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-with-active-players-server-north-america" />;
}
