import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-baiak-server-latin-america');
}

export default function ClassickDrakoriaBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-baiak-server-latin-america" />;
}
