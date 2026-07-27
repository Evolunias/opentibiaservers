import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-pvpe-server-sweden');
}

export default function MidhemPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="midhem-pvpe-server-sweden" />;
}
