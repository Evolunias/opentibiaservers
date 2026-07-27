import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-10-0-with-reviews-server');
}

export default function Shadowcores100WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-10-0-with-reviews-server" />;
}
