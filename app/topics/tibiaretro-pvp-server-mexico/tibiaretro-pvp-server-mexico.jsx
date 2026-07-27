import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-pvp-server-mexico');
}

export default function TibiaretroPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-pvp-server-mexico" />;
}
