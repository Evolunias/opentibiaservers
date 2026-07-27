import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-miracle-open-tibia');
}

export default function WithReviewsMiracleOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-miracle-open-tibia" />;
}
