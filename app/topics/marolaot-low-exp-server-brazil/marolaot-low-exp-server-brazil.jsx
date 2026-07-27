import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-low-exp-server-brazil');
}

export default function MarolaotLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="marolaot-low-exp-server-brazil" />;
}
