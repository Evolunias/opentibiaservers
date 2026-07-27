import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-7-4-baiak-server');
}

export default function Tibiara74BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-7-4-baiak-server" />;
}
