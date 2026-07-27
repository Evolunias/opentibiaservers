import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-custom-map-server-latin-america');
}

export default function TibiaretroCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-custom-map-server-latin-america" />;
}
