import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-10-0-baiak-server');
}

export default function Classicus100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-10-0-baiak-server" />;
}
