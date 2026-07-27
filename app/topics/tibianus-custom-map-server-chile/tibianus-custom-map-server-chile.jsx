import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-custom-map-server-chile');
}

export default function TibianusCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibianus-custom-map-server-chile" />;
}
