import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-12-baiak-server');
}

export default function Tibiara12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-12-baiak-server" />;
}
