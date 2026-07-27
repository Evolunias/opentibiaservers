import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-15-with-reviews-server');
}

export default function Serenity15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-15-with-reviews-server" />;
}
