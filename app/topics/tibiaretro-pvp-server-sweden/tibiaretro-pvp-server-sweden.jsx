import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-pvp-server-sweden');
}

export default function TibiaretroPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-pvp-server-sweden" />;
}
