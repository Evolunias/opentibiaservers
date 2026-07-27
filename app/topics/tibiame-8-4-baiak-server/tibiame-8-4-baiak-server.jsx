import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-4-baiak-server');
}

export default function Tibiame84BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-4-baiak-server" />;
}
