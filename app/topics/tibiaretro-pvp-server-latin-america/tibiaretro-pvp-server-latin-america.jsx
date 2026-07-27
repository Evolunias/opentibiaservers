import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-pvp-server-latin-america');
}

export default function TibiaretroPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-pvp-server-latin-america" />;
}
