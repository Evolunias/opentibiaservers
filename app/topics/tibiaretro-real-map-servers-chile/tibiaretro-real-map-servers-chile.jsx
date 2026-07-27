import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-real-map-servers-chile');
}

export default function TibiaretroRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-real-map-servers-chile" />;
}
