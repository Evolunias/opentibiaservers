import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-fresh-start-server-europe');
}

export default function MarolaotFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="marolaot-fresh-start-server-europe" />;
}
