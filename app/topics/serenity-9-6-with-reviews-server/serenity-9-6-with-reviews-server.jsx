import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-9-6-with-reviews-server');
}

export default function Serenity96WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-9-6-with-reviews-server" />;
}
