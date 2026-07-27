import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-pvpe-server-france');
}

export default function TibiaretroPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-pvpe-server-france" />;
}
