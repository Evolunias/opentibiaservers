import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-reviews');
}

export default function MiracleReviewsKeywordPage() {
  return <StaticKeywordPage slug="miracle-reviews" />;
}
