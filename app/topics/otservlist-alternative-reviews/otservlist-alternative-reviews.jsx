import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-alternative-reviews');
}

export default function OtservlistAlternativeReviewsKeywordPage() {
  return <StaticKeywordPage slug="otservlist-alternative-reviews" />;
}
