import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-10-0-with-reviews-server');
}

export default function Serenity100WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-10-0-with-reviews-server" />;
}
