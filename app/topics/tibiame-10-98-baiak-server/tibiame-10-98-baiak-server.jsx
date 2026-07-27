import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-10-98-baiak-server');
}

export default function Tibiame1098BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-10-98-baiak-server" />;
}
