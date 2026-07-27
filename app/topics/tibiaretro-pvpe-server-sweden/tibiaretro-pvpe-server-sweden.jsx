import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-pvpe-server-sweden');
}

export default function TibiaretroPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-pvpe-server-sweden" />;
}
