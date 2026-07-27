import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-13-with-reviews-server');
}

export default function Shadowcores13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-13-with-reviews-server" />;
}
