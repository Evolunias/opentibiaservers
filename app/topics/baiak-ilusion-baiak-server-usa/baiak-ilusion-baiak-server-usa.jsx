import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-baiak-server-usa');
}

export default function BaiakIlusionBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-baiak-server-usa" />;
}
