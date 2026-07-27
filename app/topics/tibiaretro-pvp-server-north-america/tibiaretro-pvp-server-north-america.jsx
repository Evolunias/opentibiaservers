import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-pvp-server-north-america');
}

export default function TibiaretroPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-pvp-server-north-america" />;
}
