import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-pvpe-server-latin-america');
}

export default function TibiaretroPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-pvpe-server-latin-america" />;
}
