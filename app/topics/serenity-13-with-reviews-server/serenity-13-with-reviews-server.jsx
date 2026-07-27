import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-13-with-reviews-server');
}

export default function Serenity13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-13-with-reviews-server" />;
}
