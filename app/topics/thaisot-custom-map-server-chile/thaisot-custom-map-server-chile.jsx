import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-custom-map-server-chile');
}

export default function ThaisotCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="thaisot-custom-map-server-chile" />;
}
