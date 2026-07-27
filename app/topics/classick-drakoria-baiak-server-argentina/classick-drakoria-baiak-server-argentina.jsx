import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-baiak-server-argentina');
}

export default function ClassickDrakoriaBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-baiak-server-argentina" />;
}
