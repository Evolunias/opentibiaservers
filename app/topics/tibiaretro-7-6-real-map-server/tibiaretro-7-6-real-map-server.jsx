import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-6-real-map-server');
}

export default function Tibiaretro76RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-6-real-map-server" />;
}
