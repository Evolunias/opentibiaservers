import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-4-with-reviews-server');
}

export default function Shadowcores84WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-4-with-reviews-server" />;
}
