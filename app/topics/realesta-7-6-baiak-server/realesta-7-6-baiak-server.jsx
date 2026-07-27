import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-7-6-baiak-server');
}

export default function Realesta76BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-7-6-baiak-server" />;
}
