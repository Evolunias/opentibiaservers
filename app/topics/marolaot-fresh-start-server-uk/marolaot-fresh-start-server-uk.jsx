import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-fresh-start-server-uk');
}

export default function MarolaotFreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="marolaot-fresh-start-server-uk" />;
}
