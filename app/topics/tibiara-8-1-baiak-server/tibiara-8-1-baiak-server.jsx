import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-1-baiak-server');
}

export default function Tibiara81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-1-baiak-server" />;
}
