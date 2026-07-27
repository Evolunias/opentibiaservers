import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-15-baiak-server');
}

export default function ClassickDrakoria15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-15-baiak-server" />;
}
