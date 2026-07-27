import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-with-reviews-server-mexico');
}

export default function SerenityWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="serenity-with-reviews-server-mexico" />;
}
