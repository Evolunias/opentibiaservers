import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-7-4-baiak-server');
}

export default function ClassickDrakoria74BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-7-4-baiak-server" />;
}
