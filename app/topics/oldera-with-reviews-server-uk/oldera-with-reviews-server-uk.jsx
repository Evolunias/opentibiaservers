import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-reviews-server-uk');
}

export default function OlderaWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-reviews-server-uk" />;
}
