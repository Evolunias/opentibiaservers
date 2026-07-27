import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-baiak-server-mexico');
}

export default function ClassickDrakoriaBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-baiak-server-mexico" />;
}
