import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-real-map-server-chile');
}

export default function TibijkaRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibijka-real-map-server-chile" />;
}
