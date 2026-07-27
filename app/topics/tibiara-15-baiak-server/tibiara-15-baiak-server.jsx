import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-15-baiak-server');
}

export default function Tibiara15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-15-baiak-server" />;
}
