import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiaretro-private-server');
}

export default function RealMapTibiaretroPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiaretro-private-server" />;
}
