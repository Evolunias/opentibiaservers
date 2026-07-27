import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-vip');
}

export default function BaiakIlusionVipKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-vip" />;
}
