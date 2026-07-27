import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-baiak-server-brazil');
}

export default function ClassickDrakoriaBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-baiak-server-brazil" />;
}
