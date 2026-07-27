import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiaretro-open-tibia');
}

export default function RealMapTibiaretroOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiaretro-open-tibia" />;
}
