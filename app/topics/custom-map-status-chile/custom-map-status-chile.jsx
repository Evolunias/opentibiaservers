import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-status-chile');
}

export default function CustomMapStatusChileKeywordPage() {
  return <StaticKeywordPage slug="custom-map-status-chile" />;
}
