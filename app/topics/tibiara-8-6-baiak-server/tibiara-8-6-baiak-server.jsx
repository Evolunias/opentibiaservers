import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-6-baiak-server');
}

export default function Tibiara86BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-6-baiak-server" />;
}
