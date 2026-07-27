import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-15-real-map-server');
}

export default function Tibiaretro15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-15-real-map-server" />;
}
