import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-12-baiak-server');
}

export default function Tibiame12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-12-baiak-server" />;
}
