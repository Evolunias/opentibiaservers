import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-aurera-global-official');
}

export default function WithReviewsAureraGlobalOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-aurera-global-official" />;
}
