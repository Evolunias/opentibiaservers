import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-6-pvpe-server');
}

export default function Tibiaretro86PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-6-pvpe-server" />;
}
