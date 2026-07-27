import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-reviews-server-poland');
}

export default function RealeraWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="realera-with-reviews-server-poland" />;
}
