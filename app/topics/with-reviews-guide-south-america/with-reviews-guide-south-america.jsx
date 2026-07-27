import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-guide-south-america');
}

export default function WithReviewsGuideSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-guide-south-america" />;
}
