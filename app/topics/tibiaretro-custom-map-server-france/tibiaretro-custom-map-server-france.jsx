import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-custom-map-server-france');
}

export default function TibiaretroCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-custom-map-server-france" />;
}
