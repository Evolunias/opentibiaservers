import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-pvp-server-argentina');
}

export default function TibiaretroPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-pvp-server-argentina" />;
}
