import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-with-active-players-server-europe');
}

export default function MarolaotWithActivePlayersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="marolaot-with-active-players-server-europe" />;
}
