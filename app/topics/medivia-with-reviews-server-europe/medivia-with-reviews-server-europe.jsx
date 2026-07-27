import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-reviews-server-europe');
}

export default function MediviaWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-reviews-server-europe" />;
}
