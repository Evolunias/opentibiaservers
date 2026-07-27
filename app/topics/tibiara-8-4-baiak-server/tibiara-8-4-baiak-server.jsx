import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-4-baiak-server');
}

export default function Tibiara84BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-4-baiak-server" />;
}
