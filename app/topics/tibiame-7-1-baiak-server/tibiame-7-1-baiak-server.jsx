import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-7-1-baiak-server');
}

export default function Tibiame71BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-7-1-baiak-server" />;
}
