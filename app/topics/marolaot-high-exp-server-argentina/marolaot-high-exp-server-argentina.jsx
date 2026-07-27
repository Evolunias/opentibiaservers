import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-high-exp-server-argentina');
}

export default function MarolaotHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-high-exp-server-argentina" />;
}
