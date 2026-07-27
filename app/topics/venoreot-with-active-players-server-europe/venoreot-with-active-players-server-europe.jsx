import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-with-active-players-server-europe');
}

export default function VenoreotWithActivePlayersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="venoreot-with-active-players-server-europe" />;
}
