import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiaretro-login');
}

export default function RealMapTibiaretroLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiaretro-login" />;
}
