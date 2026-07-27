import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-server-list-chile');
}

export default function CustomMapServerListChileKeywordPage() {
  return <StaticKeywordPage slug="custom-map-server-list-chile" />;
}
