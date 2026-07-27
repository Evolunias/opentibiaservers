import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-with-reviews-server-argentina');
}

export default function SerenityWithReviewsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="serenity-with-reviews-server-argentina" />;
}
