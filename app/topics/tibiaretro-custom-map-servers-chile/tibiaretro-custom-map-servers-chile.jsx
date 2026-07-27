import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-custom-map-servers-chile');
}

export default function TibiaretroCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-custom-map-servers-chile" />;
}
