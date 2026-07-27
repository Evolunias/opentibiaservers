import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-reviews');
}

export default function OtservlistReviewsKeywordPage() {
  return <StaticKeywordPage slug="otservlist-reviews" />;
}
