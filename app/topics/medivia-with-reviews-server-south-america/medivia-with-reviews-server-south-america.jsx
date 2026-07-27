import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-reviews-server-south-america');
}

export default function MediviaWithReviewsServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-reviews-server-south-america" />;
}
