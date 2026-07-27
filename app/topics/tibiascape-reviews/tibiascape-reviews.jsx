import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-reviews');
}

export default function TibiascapeReviewsKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-reviews" />;
}
