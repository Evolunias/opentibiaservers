import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-1-baiak-server');
}

export default function Empirebr71BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-1-baiak-server" />;
}
