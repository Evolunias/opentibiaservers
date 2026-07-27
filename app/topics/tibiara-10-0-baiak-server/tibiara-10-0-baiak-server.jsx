import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-10-0-baiak-server');
}

export default function Tibiara100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-10-0-baiak-server" />;
}
