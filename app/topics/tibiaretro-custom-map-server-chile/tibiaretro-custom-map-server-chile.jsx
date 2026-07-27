import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-custom-map-server-chile');
}

export default function TibiaretroCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-custom-map-server-chile" />;
}
