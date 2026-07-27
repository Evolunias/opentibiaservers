import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-custom-map-servers-latin-america');
}

export default function TibiaretroCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-custom-map-servers-latin-america" />;
}
