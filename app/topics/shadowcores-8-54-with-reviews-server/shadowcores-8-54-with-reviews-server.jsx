import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-54-with-reviews-server');
}

export default function Shadowcores854WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-54-with-reviews-server" />;
}
