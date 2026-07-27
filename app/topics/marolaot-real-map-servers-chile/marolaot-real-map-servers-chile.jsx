import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-real-map-servers-chile');
}

export default function MarolaotRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="marolaot-real-map-servers-chile" />;
}
