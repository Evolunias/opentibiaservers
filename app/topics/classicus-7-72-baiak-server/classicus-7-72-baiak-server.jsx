import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-7-72-baiak-server');
}

export default function Classicus772BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-7-72-baiak-server" />;
}
