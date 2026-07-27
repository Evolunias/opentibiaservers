import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-pvpe-server-mexico');
}

export default function TibiaretroPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-pvpe-server-mexico" />;
}
