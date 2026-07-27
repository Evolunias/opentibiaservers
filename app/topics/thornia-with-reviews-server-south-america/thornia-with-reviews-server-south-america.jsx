import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-reviews-server-south-america');
}

export default function ThorniaWithReviewsServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-reviews-server-south-america" />;
}
