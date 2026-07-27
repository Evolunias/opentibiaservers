import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-with-active-players-server-france');
}

export default function VenoreotWithActivePlayersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="venoreot-with-active-players-server-france" />;
}
