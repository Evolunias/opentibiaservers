import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-low-exp-server-poland');
}

export default function MarolaotLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="marolaot-low-exp-server-poland" />;
}
