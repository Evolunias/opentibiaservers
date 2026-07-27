import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-pvpe-server-canada');
}

export default function TibiaretroPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-pvpe-server-canada" />;
}
