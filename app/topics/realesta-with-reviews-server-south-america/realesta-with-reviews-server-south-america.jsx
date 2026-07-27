import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-reviews-server-south-america');
}

export default function RealestaWithReviewsServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-reviews-server-south-america" />;
}
