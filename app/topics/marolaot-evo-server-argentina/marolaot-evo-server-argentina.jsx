import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-evo-server-argentina');
}

export default function MarolaotEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-evo-server-argentina" />;
}
