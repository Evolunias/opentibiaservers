import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiaretro-official');
}

export default function RealMapTibiaretroOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiaretro-official" />;
}
