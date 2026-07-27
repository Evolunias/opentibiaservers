import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-14-with-reviews-server');
}

export default function Shadowcores14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-14-with-reviews-server" />;
}
