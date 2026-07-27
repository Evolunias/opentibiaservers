import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-baiak-server-uk');
}

export default function BaiakIlusionBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-baiak-server-uk" />;
}
