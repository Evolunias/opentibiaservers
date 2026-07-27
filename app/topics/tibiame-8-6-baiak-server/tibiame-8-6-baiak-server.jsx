import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-6-baiak-server');
}

export default function Tibiame86BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-6-baiak-server" />;
}
