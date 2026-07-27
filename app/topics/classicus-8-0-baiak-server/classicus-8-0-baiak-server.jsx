import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-0-baiak-server');
}

export default function Classicus80BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-0-baiak-server" />;
}
