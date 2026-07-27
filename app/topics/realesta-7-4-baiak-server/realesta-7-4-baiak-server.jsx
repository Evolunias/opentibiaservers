import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-7-4-baiak-server');
}

export default function Realesta74BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-7-4-baiak-server" />;
}
