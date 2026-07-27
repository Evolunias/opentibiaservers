import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-with-reviews-server-europe');
}

export default function MiracleWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="miracle-with-reviews-server-europe" />;
}
