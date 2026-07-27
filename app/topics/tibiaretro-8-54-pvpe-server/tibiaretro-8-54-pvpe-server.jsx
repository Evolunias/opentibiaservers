import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-54-pvpe-server');
}

export default function Tibiaretro854PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-54-pvpe-server" />;
}
