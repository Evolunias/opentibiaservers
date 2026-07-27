import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-6-pvpe-server');
}

export default function Tibiaretro76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-6-pvpe-server" />;
}
