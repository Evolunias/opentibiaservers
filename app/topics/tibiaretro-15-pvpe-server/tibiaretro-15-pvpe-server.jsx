import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-15-pvpe-server');
}

export default function Tibiaretro15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-15-pvpe-server" />;
}
