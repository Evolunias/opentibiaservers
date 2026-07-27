import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-reviews-server-south-america');
}

export default function MidhemWithReviewsServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-reviews-server-south-america" />;
}
