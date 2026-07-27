import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-baiak-server-usa');
}

export default function ClassickDrakoriaBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-baiak-server-usa" />;
}
