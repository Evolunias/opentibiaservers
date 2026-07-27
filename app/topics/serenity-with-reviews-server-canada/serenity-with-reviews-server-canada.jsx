import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-with-reviews-server-canada');
}

export default function SerenityWithReviewsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="serenity-with-reviews-server-canada" />;
}
