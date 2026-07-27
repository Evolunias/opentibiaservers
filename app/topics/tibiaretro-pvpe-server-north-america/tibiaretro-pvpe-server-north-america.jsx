import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-pvpe-server-north-america');
}

export default function TibiaretroPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-pvpe-server-north-america" />;
}
