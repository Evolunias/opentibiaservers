import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-reviews-server-europe');
}

export default function OlderaWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-reviews-server-europe" />;
}
