import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-baiak-server-sweden');
}

export default function ClassickDrakoriaBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-baiak-server-sweden" />;
}
