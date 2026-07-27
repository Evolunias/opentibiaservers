import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-11-baiak-server');
}

export default function Tibiame11BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-11-baiak-server" />;
}
