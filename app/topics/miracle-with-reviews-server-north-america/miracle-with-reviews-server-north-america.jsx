import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-with-reviews-server-north-america');
}

export default function MiracleWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="miracle-with-reviews-server-north-america" />;
}
