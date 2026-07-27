import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-7-6-baiak-server');
}

export default function ClassickDrakoria76BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-7-6-baiak-server" />;
}
