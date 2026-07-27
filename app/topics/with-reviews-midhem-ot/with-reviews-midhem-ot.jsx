import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-midhem-ot');
}

export default function WithReviewsMidhemOtKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-midhem-ot" />;
}
