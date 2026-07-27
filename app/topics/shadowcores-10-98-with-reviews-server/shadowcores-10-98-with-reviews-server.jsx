import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-10-98-with-reviews-server');
}

export default function Shadowcores1098WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-10-98-with-reviews-server" />;
}
