import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-pvpe-server-brazil');
}

export default function TibiaretroPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-pvpe-server-brazil" />;
}
