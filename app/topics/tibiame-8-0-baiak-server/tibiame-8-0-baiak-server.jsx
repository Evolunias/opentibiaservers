import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-0-baiak-server');
}

export default function Tibiame80BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-0-baiak-server" />;
}
