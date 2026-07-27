import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-54-baiak-server');
}

export default function Classicus854BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-54-baiak-server" />;
}
