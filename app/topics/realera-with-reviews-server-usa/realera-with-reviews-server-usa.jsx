import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-reviews-server-usa');
}

export default function RealeraWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="realera-with-reviews-server-usa" />;
}
