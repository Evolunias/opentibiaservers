import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-baiak-server-north-america');
}

export default function BaiakIlusionBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-baiak-server-north-america" />;
}
