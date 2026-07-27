import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-reviews');
}

export default function BaiakIlusionReviewsKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-reviews" />;
}
