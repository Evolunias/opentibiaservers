import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-tibiaretro-server');
}

export default function CustomMapTibiaretroServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-tibiaretro-server" />;
}
