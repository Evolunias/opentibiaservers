import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-custom-map-server-chile');
}

export default function MarolaotCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="marolaot-custom-map-server-chile" />;
}
