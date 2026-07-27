import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-1-pvpe-server');
}

export default function Tibiaretro81PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-1-pvpe-server" />;
}
