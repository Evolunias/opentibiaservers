import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-11-pvpe-server');
}

export default function Tibiaretro11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-11-pvpe-server" />;
}
