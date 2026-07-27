import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-15-with-reviews-server');
}

export default function Shadowcores15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-15-with-reviews-server" />;
}
