import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-pvpe-server-sweden');
}

export default function RealestaPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="realesta-pvpe-server-sweden" />;
}
