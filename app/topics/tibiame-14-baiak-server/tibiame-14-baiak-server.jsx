import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-14-baiak-server');
}

export default function Tibiame14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-14-baiak-server" />;
}
