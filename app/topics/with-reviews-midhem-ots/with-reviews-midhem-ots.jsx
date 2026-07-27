import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-midhem-ots');
}

export default function WithReviewsMidhemOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-midhem-ots" />;
}
