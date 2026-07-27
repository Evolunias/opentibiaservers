import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-9-6-with-reviews-server');
}

export default function Shadowcores96WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-9-6-with-reviews-server" />;
}
