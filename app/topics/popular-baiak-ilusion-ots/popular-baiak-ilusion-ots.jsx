import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-baiak-ilusion-ots');
}

export default function PopularBaiakIlusionOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-baiak-ilusion-ots" />;
}
