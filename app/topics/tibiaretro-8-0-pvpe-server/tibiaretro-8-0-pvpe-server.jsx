import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-0-pvpe-server');
}

export default function Tibiaretro80PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-0-pvpe-server" />;
}
