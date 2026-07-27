import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-14-baiak-server');
}

export default function Empirebr14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-14-baiak-server" />;
}
