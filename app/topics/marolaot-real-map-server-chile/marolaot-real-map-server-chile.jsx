import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-real-map-server-chile');
}

export default function MarolaotRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="marolaot-real-map-server-chile" />;
}
