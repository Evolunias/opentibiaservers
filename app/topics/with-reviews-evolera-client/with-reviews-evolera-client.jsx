import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-evolera-client');
}

export default function WithReviewsEvoleraClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-evolera-client" />;
}
