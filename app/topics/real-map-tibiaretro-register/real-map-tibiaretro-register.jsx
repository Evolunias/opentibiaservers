import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiaretro-register');
}

export default function RealMapTibiaretroRegisterKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiaretro-register" />;
}
