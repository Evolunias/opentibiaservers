import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-evo-servers-brazil');
}

export default function MarolaotEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="marolaot-evo-servers-brazil" />;
}
