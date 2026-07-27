import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-12-baiak-server');
}

export default function Empirebr12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-12-baiak-server" />;
}
