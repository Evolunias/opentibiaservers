import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-reviews-server-europe');
}

export default function ThorniaWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-reviews-server-europe" />;
}
