import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-8-0-with-reviews-server');
}

export default function DuraOnline80WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-8-0-with-reviews-server" />;
}
