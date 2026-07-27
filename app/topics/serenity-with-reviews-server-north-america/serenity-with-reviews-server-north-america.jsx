import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-with-reviews-server-north-america');
}

export default function SerenityWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-with-reviews-server-north-america" />;
}
