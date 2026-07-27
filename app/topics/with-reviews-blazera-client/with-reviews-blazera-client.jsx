import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-blazera-client');
}

export default function WithReviewsBlazeraClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-blazera-client" />;
}
