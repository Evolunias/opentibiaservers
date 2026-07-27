import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-with-active-players-server-poland');
}

export default function VenoreotWithActivePlayersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="venoreot-with-active-players-server-poland" />;
}
