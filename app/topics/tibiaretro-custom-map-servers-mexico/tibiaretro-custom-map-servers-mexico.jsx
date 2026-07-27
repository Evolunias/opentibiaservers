import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-custom-map-servers-mexico');
}

export default function TibiaretroCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-custom-map-servers-mexico" />;
}
