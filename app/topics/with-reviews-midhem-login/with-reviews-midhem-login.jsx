import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-midhem-login');
}

export default function WithReviewsMidhemLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-midhem-login" />;
}
