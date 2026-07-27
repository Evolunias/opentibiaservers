import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-with-reviews-server-germany');
}

export default function SerenityWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="serenity-with-reviews-server-germany" />;
}
