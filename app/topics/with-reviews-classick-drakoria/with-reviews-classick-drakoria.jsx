import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-classick-drakoria');
}

export default function WithReviewsClassickDrakoriaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-classick-drakoria" />;
}
