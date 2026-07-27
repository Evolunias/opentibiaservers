import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-reviews-server-north-america');
}

export default function ThorniaWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-reviews-server-north-america" />;
}
