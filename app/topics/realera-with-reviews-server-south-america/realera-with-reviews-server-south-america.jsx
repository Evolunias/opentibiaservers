import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-reviews-server-south-america');
}

export default function RealeraWithReviewsServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-with-reviews-server-south-america" />;
}
