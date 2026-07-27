import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-12-with-reviews-server');
}

export default function DuraOnline12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-12-with-reviews-server" />;
}
