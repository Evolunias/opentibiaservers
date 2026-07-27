import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-baiak-server-germany');
}

export default function BaiakIlusionBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-baiak-server-germany" />;
}
