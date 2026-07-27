import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-7-6-with-reviews-server');
}

export default function Serenity76WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-7-6-with-reviews-server" />;
}
