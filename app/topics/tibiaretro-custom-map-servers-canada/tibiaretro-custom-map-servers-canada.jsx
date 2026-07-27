import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-custom-map-servers-canada');
}

export default function TibiaretroCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-custom-map-servers-canada" />;
}
