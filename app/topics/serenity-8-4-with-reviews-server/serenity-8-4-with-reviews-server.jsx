import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-4-with-reviews-server');
}

export default function Serenity84WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-4-with-reviews-server" />;
}
