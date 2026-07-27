import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-9-6-baiak-server');
}

export default function Classicus96BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-9-6-baiak-server" />;
}
