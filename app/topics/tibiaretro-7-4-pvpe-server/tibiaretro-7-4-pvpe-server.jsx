import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-4-pvpe-server');
}

export default function Tibiaretro74PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-4-pvpe-server" />;
}
