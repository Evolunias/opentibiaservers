import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-pvpe-server-germany');
}

export default function TibiaretroPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-pvpe-server-germany" />;
}
