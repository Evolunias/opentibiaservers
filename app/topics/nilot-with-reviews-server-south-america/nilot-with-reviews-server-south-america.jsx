import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-reviews-server-south-america');
}

export default function NilotWithReviewsServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-reviews-server-south-america" />;
}
