import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-reviews-server-poland');
}

export default function OlderaWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-reviews-server-poland" />;
}
