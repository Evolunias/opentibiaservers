import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiaretro-server');
}

export default function RealMapTibiaretroServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiaretro-server" />;
}
