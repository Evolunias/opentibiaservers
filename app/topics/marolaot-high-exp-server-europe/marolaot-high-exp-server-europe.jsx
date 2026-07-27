import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-high-exp-server-europe');
}

export default function MarolaotHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="marolaot-high-exp-server-europe" />;
}
