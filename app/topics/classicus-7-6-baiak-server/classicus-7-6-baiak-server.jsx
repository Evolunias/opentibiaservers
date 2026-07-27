import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-7-6-baiak-server');
}

export default function Classicus76BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-7-6-baiak-server" />;
}
