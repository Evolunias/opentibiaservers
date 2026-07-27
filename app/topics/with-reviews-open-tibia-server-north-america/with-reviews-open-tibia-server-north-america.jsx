import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-open-tibia-server-north-america');
}

export default function WithReviewsOpenTibiaServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-open-tibia-server-north-america" />;
}
