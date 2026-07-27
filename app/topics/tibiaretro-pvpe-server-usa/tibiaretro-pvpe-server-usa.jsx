import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-pvpe-server-usa');
}

export default function TibiaretroPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-pvpe-server-usa" />;
}
