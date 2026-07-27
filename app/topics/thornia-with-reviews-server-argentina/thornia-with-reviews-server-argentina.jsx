import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-reviews-server-argentina');
}

export default function ThorniaWithReviewsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-reviews-server-argentina" />;
}
