import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-midhem-official');
}

export default function WithReviewsMidhemOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-midhem-official" />;
}
