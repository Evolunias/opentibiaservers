import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-14-pvpe-server');
}

export default function Tibiaretro14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-14-pvpe-server" />;
}
