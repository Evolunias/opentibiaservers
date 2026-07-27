import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-1-with-reviews-server');
}

export default function Shadowcores81WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-1-with-reviews-server" />;
}
