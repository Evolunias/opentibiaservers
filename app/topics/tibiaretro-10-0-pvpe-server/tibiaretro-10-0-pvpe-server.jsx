import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-10-0-pvpe-server');
}

export default function Tibiaretro100PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-10-0-pvpe-server" />;
}
