import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-pvpe-server-sweden');
}

export default function ClassickDrakoriaPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-pvpe-server-sweden" />;
}
