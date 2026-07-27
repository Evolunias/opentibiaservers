import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiaretro-ot-server');
}

export default function RealMapTibiaretroOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiaretro-ot-server" />;
}
