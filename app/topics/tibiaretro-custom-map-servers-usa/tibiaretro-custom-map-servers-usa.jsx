import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-custom-map-servers-usa');
}

export default function TibiaretroCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-custom-map-servers-usa" />;
}
