import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-evolunia-website');
}

export default function WithReviewsEvoluniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-evolunia-website" />;
}
