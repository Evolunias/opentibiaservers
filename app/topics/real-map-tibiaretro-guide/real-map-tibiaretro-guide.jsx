import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiaretro-guide');
}

export default function RealMapTibiaretroGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiaretro-guide" />;
}
