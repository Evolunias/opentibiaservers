import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-8-0-with-reviews-server');
}

export default function Unline80WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="unline-8-0-with-reviews-server" />;
}
