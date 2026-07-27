import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiaretro');
}

export default function RealMapTibiaretroKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiaretro" />;
}
