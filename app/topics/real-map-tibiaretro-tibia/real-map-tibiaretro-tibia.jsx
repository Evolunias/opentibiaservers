import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiaretro-tibia');
}

export default function RealMapTibiaretroTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiaretro-tibia" />;
}
