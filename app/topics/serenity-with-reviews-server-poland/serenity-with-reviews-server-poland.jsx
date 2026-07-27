import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-with-reviews-server-poland');
}

export default function SerenityWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="serenity-with-reviews-server-poland" />;
}
