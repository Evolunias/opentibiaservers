import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-evo-server-chile');
}

export default function MarolaotEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="marolaot-evo-server-chile" />;
}
