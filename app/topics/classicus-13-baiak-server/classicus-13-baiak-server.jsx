import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-13-baiak-server');
}

export default function Classicus13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-13-baiak-server" />;
}
