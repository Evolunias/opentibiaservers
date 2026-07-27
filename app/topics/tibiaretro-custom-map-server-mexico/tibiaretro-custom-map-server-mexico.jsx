import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-custom-map-server-mexico');
}

export default function TibiaretroCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-custom-map-server-mexico" />;
}
