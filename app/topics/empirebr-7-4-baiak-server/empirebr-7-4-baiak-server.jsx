import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-4-baiak-server');
}

export default function Empirebr74BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-4-baiak-server" />;
}
