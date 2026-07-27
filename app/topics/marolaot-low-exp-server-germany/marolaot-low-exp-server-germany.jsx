import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-low-exp-server-germany');
}

export default function MarolaotLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="marolaot-low-exp-server-germany" />;
}
