import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-evo-server-south-america');
}

export default function MarolaotEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-evo-server-south-america" />;
}
