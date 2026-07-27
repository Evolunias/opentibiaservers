import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-reviews-server-north-america');
}

export default function RealeraWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-with-reviews-server-north-america" />;
}
