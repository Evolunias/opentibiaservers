import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiaretro-ots');
}

export default function RealMapTibiaretroOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiaretro-ots" />;
}
