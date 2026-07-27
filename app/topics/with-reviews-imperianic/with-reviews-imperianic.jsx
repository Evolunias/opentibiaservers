import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-imperianic');
}

export default function WithReviewsImperianicKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-imperianic" />;
}
