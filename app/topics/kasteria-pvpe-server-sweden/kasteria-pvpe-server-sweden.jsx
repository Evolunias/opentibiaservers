import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-pvpe-server-sweden');
}

export default function KasteriaPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="kasteria-pvpe-server-sweden" />;
}
