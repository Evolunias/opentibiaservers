import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-baiak-server-poland');
}

export default function ClassickDrakoriaBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-baiak-server-poland" />;
}
