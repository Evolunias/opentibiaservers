import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-baiak-server-brazil');
}

export default function BaiakIlusionBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-baiak-server-brazil" />;
}
