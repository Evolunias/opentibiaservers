import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-54-baiak-server');
}

export default function Tibiara854BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-54-baiak-server" />;
}
