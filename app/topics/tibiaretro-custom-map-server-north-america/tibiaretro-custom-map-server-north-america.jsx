import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-custom-map-server-north-america');
}

export default function TibiaretroCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-custom-map-server-north-america" />;
}
