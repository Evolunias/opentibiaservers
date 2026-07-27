import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-high-exp-server-germany');
}

export default function MarolaotHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="marolaot-high-exp-server-germany" />;
}
