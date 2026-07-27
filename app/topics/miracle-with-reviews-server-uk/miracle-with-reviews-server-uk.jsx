import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-with-reviews-server-uk');
}

export default function MiracleWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="miracle-with-reviews-server-uk" />;
}
