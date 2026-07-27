import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-reviews-server-argentina');
}

export default function RealeraWithReviewsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="realera-with-reviews-server-argentina" />;
}
