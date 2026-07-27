import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-midhem-client');
}

export default function WithReviewsMidhemClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-midhem-client" />;
}
