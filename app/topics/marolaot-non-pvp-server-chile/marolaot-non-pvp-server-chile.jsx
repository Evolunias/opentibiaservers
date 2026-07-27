import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-non-pvp-server-chile');
}

export default function MarolaotNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="marolaot-non-pvp-server-chile" />;
}
