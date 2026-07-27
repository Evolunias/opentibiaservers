import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-4-pvpe-server');
}

export default function Tibiaretro84PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-4-pvpe-server" />;
}
