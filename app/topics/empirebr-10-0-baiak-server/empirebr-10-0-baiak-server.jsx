import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-10-0-baiak-server');
}

export default function Empirebr100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-10-0-baiak-server" />;
}
