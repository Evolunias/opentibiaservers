import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-with-reviews-server-poland');
}

export default function MiracleWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="miracle-with-reviews-server-poland" />;
}
