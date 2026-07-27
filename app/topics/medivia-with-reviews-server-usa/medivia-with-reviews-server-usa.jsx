import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-reviews-server-usa');
}

export default function MediviaWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-reviews-server-usa" />;
}
