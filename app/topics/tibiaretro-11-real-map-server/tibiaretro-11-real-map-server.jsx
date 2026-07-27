import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-11-real-map-server');
}

export default function Tibiaretro11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-11-real-map-server" />;
}
