import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-reviews');
}

export default function ImperianicReviewsKeywordPage() {
  return <StaticKeywordPage slug="imperianic-reviews" />;
}
