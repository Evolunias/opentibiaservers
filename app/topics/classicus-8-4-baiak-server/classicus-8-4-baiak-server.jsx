import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-4-baiak-server');
}

export default function Classicus84BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-4-baiak-server" />;
}
