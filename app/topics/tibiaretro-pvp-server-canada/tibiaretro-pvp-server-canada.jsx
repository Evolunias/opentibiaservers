import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-pvp-server-canada');
}

export default function TibiaretroPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-pvp-server-canada" />;
}
