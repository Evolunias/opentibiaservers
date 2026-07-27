import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-9-6-baiak-server');
}

export default function Tibiame96BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-9-6-baiak-server" />;
}
