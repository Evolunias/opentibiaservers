import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-custom-map-servers-chile');
}

export default function ThaisotCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="thaisot-custom-map-servers-chile" />;
}
