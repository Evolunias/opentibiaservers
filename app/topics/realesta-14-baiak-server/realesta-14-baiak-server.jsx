import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-14-baiak-server');
}

export default function Realesta14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-14-baiak-server" />;
}
