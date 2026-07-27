import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-reviews');
}

export default function LumineraReviewsKeywordPage() {
  return <StaticKeywordPage slug="luminera-reviews" />;
}
