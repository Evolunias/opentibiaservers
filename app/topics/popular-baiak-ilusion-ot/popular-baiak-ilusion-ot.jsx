import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-baiak-ilusion-ot');
}

export default function PopularBaiakIlusionOtKeywordPage() {
  return <StaticKeywordPage slug="popular-baiak-ilusion-ot" />;
}
