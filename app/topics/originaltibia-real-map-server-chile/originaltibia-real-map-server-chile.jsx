import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-real-map-server-chile');
}

export default function OriginaltibiaRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-real-map-server-chile" />;
}
