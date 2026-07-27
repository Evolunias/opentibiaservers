import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-real-map-server-chile');
}

export default function TibiaRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibia-real-map-server-chile" />;
}
