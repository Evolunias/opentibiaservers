import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-custom-map-servers-north-america');
}

export default function TibiaretroCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-custom-map-servers-north-america" />;
}
