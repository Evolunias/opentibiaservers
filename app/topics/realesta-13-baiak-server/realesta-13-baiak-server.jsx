import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-13-baiak-server');
}

export default function Realesta13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-13-baiak-server" />;
}
