import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-14-real-map-server');
}

export default function Tibiaretro14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-14-real-map-server" />;
}
