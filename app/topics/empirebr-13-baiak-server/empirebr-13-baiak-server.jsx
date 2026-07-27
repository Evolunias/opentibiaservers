import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-13-baiak-server');
}

export default function Empirebr13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-13-baiak-server" />;
}
