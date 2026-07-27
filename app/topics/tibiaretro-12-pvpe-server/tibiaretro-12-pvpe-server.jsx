import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-12-pvpe-server');
}

export default function Tibiaretro12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-12-pvpe-server" />;
}
