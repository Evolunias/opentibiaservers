import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-reviews-server-germany');
}

export default function LumineraWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-reviews-server-germany" />;
}
