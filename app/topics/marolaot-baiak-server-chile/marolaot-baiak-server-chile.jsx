import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-baiak-server-chile');
}

export default function MarolaotBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="marolaot-baiak-server-chile" />;
}
