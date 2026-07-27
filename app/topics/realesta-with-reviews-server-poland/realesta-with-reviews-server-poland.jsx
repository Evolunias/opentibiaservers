import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-reviews-server-poland');
}

export default function RealestaWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-reviews-server-poland" />;
}
