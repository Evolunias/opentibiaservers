import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-baiak-server-germany');
}

export default function ClassickDrakoriaBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-baiak-server-germany" />;
}
