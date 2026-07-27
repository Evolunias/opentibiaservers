import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-1-real-map-server');
}

export default function Tibiaretro81RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-1-real-map-server" />;
}
