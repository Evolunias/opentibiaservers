import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-with-active-players-server-germany');
}

export default function VenoreotWithActivePlayersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="venoreot-with-active-players-server-germany" />;
}
