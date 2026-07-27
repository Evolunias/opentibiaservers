import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-1-with-reviews-server');
}

export default function Shadowcores71WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-1-with-reviews-server" />;
}
