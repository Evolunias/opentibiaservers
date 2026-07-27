import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-10-0-baiak-server');
}

export default function Realesta100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-10-0-baiak-server" />;
}
