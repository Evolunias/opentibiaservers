import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-server-chile');
}

export default function CustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="custom-map-server-chile" />;
}
