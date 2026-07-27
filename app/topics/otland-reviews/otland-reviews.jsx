import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-reviews');
}

export default function OtlandReviewsKeywordPage() {
  return <StaticKeywordPage slug="otland-reviews" />;
}
