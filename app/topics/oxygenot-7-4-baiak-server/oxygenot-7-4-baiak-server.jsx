import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-7-4-baiak-server');
}

export default function Oxygenot74BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-7-4-baiak-server" />;
}
