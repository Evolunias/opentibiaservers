import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-7-4-baiak-server');
}

export default function Tibiame74BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-7-4-baiak-server" />;
}
