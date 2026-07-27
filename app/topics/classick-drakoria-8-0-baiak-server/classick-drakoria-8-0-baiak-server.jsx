import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-8-0-baiak-server');
}

export default function ClassickDrakoria80BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-8-0-baiak-server" />;
}
