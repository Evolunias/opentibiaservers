import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-baiak-server-uk');
}

export default function ClassickDrakoriaBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-baiak-server-uk" />;
}
