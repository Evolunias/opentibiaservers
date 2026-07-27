import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-8-1-baiak-server');
}

export default function Realesta81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-8-1-baiak-server" />;
}
