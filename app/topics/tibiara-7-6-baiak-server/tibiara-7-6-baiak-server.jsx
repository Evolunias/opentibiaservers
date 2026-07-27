import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-7-6-baiak-server');
}

export default function Tibiara76BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-7-6-baiak-server" />;
}
