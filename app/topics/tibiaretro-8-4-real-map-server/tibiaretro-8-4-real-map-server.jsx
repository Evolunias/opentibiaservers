import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-4-real-map-server');
}

export default function Tibiaretro84RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-4-real-map-server" />;
}
