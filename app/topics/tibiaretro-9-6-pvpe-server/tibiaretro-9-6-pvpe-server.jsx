import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-9-6-pvpe-server');
}

export default function Tibiaretro96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-9-6-pvpe-server" />;
}
