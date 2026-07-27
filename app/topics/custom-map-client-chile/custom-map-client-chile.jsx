import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-client-chile');
}

export default function CustomMapClientChileKeywordPage() {
  return <StaticKeywordPage slug="custom-map-client-chile" />;
}
