import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-11-with-reviews-server');
}

export default function Shadowcores11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-11-with-reviews-server" />;
}
