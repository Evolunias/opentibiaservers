import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-pvpe-server-chile');
}

export default function MarolaotPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="marolaot-pvpe-server-chile" />;
}
