import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-1-baiak-server');
}

export default function Empirebr81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-1-baiak-server" />;
}
