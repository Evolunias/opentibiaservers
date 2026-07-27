import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-13-pvpe-server');
}

export default function Tibiaretro13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-13-pvpe-server" />;
}
