import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-9-6-baiak-server');
}

export default function Empirebr96BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-9-6-baiak-server" />;
}
