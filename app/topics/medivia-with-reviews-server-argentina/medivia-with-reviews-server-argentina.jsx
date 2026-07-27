import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-reviews-server-argentina');
}

export default function MediviaWithReviewsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-reviews-server-argentina" />;
}
