import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-evo-server-france');
}

export default function MarolaotEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="marolaot-evo-server-france" />;
}
