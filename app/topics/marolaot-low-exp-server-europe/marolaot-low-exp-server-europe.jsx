import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-low-exp-server-europe');
}

export default function MarolaotLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="marolaot-low-exp-server-europe" />;
}
