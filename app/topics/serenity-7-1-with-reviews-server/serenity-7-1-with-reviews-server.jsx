import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-7-1-with-reviews-server');
}

export default function Serenity71WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-7-1-with-reviews-server" />;
}
