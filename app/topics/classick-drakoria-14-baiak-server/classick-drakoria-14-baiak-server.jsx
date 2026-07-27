import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-14-baiak-server');
}

export default function ClassickDrakoria14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-14-baiak-server" />;
}
