import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-custom-map-server-usa');
}

export default function TibiaretroCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-custom-map-server-usa" />;
}
