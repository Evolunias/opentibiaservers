import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-real-map-server-chile');
}

export default function TibianusRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibianus-real-map-server-chile" />;
}
