import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-reviews-server-europe');
}

export default function RealeraWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="realera-with-reviews-server-europe" />;
}
