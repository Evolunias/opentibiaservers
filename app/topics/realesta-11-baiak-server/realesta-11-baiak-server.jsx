import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-11-baiak-server');
}

export default function Realesta11BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-11-baiak-server" />;
}
