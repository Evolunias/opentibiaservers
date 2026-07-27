import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-pvpe-server-uk');
}

export default function TibiaretroPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-pvpe-server-uk" />;
}
