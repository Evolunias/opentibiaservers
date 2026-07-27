import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-baiak-ilusion-server');
}

export default function BaiakBaiakIlusionServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-baiak-ilusion-server" />;
}
