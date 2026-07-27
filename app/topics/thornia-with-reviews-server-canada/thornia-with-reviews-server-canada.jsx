import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-reviews-server-canada');
}

export default function ThorniaWithReviewsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-reviews-server-canada" />;
}
