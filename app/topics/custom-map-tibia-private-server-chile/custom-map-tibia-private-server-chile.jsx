import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-tibia-private-server-chile');
}

export default function CustomMapTibiaPrivateServerChileKeywordPage() {
  return <StaticKeywordPage slug="custom-map-tibia-private-server-chile" />;
}
