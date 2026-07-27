import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-8-6-baiak-server');
}

export default function Realesta86BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-8-6-baiak-server" />;
}
