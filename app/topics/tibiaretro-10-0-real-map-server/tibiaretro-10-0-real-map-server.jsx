import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-10-0-real-map-server');
}

export default function Tibiaretro100RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-10-0-real-map-server" />;
}
