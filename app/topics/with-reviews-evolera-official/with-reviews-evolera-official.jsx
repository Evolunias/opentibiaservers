import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-evolera-official');
}

export default function WithReviewsEvoleraOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-evolera-official" />;
}
