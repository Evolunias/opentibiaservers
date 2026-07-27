import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-0-with-reviews-server');
}

export default function Shadowcores80WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-0-with-reviews-server" />;
}
