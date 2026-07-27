import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-imperianic-ot');
}

export default function WithReviewsImperianicOtKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-imperianic-ot" />;
}
