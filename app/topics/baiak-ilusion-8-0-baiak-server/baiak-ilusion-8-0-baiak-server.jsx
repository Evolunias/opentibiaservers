import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-8-0-baiak-server');
}

export default function BaiakIlusion80BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-8-0-baiak-server" />;
}
