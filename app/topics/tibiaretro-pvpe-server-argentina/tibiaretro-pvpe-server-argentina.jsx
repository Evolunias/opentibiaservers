import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-pvpe-server-argentina');
}

export default function TibiaretroPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-pvpe-server-argentina" />;
}
