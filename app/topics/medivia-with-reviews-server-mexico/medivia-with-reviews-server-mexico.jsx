import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-reviews-server-mexico');
}

export default function MediviaWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-reviews-server-mexico" />;
}
