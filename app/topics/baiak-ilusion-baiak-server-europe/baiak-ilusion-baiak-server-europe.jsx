import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-baiak-server-europe');
}

export default function BaiakIlusionBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-baiak-server-europe" />;
}
