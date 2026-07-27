import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-54-with-reviews-server');
}

export default function Serenity854WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-54-with-reviews-server" />;
}
