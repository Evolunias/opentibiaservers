import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-6-baiak-server');
}

export default function Classicus86BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-6-baiak-server" />;
}
