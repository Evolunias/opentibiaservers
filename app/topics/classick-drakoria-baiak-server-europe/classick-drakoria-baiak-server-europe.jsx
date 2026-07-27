import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-baiak-server-europe');
}

export default function ClassickDrakoriaBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-baiak-server-europe" />;
}
