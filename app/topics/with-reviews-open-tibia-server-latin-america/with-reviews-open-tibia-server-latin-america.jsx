import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-open-tibia-server-latin-america');
}

export default function WithReviewsOpenTibiaServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-open-tibia-server-latin-america" />;
}
