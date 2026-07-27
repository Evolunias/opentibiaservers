import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-pvpe-server-sweden');
}

export default function ClassicusPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="classicus-pvpe-server-sweden" />;
}
