import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-low-exp-server-argentina');
}

export default function MarolaotLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-low-exp-server-argentina" />;
}
