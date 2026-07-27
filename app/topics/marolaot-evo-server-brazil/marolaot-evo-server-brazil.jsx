import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-evo-server-brazil');
}

export default function MarolaotEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="marolaot-evo-server-brazil" />;
}
