import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-72-with-reviews-server');
}

export default function Shadowcores772WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-72-with-reviews-server" />;
}
