import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-real-map-server-chile');
}

export default function TibiaretroRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-real-map-server-chile" />;
}
