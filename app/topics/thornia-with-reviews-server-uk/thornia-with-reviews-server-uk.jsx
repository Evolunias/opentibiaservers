import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-reviews-server-uk');
}

export default function ThorniaWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-reviews-server-uk" />;
}
