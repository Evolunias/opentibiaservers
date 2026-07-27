import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-14-baiak-server');
}

export default function Classicus14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-14-baiak-server" />;
}
