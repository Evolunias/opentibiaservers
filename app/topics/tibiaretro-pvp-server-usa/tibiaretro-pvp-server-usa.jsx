import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-pvp-server-usa');
}

export default function TibiaretroPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-pvp-server-usa" />;
}
