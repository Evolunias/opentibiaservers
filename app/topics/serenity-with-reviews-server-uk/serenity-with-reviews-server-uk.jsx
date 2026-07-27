import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-with-reviews-server-uk');
}

export default function SerenityWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="serenity-with-reviews-server-uk" />;
}
