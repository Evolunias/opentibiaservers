import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-reviews-server-uk');
}

export default function RealeraWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="realera-with-reviews-server-uk" />;
}
