import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-real-map-server-chile');
}

export default function TibiaraRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiara-real-map-server-chile" />;
}
