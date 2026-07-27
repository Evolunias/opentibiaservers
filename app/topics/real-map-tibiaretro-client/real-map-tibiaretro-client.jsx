import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiaretro-client');
}

export default function RealMapTibiaretroClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiaretro-client" />;
}
