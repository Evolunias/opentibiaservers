import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-72-pvpe-server');
}

export default function Tibiaretro772PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-72-pvpe-server" />;
}
