import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-reviews-server-north-america');
}

export default function RealestaWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-reviews-server-north-america" />;
}
