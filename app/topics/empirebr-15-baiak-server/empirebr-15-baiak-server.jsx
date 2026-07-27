import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-15-baiak-server');
}

export default function Empirebr15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-15-baiak-server" />;
}
