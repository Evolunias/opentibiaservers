import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiaretro-servers');
}

export default function RealMapTibiaretroServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiaretro-servers" />;
}
