import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-with-reviews-server-latin-america');
}

export default function SerenityWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-with-reviews-server-latin-america" />;
}
