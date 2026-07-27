import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-custom-map-server-canada');
}

export default function TibiaretroCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-custom-map-server-canada" />;
}
