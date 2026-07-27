import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-custom-map-servers-chile');
}

export default function MarolaotCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="marolaot-custom-map-servers-chile" />;
}
