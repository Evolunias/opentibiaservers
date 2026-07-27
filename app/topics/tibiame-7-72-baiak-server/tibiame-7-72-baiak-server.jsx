import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-7-72-baiak-server');
}

export default function Tibiame772BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-7-72-baiak-server" />;
}
