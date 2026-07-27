import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-with-reviews-server-poland');
}

export default function ImperianicWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="imperianic-with-reviews-server-poland" />;
}
