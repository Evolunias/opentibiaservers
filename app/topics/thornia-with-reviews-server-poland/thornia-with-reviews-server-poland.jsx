import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-reviews-server-poland');
}

export default function ThorniaWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-reviews-server-poland" />;
}
