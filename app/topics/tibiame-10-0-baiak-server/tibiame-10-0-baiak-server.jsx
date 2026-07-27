import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-10-0-baiak-server');
}

export default function Tibiame100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-10-0-baiak-server" />;
}
