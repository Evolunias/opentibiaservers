import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-reviews-server-usa');
}

export default function ThorniaWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-reviews-server-usa" />;
}
