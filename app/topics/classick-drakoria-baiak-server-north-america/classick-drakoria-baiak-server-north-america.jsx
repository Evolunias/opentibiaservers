import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-baiak-server-north-america');
}

export default function ClassickDrakoriaBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-baiak-server-north-america" />;
}
