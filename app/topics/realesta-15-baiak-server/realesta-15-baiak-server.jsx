import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-15-baiak-server');
}

export default function Realesta15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-15-baiak-server" />;
}
