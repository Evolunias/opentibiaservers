import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-12-baiak-server');
}

export default function ClassickDrakoria12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-12-baiak-server" />;
}
