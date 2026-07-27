import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-1-baiak-server');
}

export default function Classicus81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-1-baiak-server" />;
}
