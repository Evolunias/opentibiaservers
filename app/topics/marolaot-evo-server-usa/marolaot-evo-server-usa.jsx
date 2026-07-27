import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-evo-server-usa');
}

export default function MarolaotEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-evo-server-usa" />;
}
