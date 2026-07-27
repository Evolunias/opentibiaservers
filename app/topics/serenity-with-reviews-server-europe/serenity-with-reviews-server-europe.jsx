import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-with-reviews-server-europe');
}

export default function SerenityWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="serenity-with-reviews-server-europe" />;
}
