import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-with-reviews-server-brazil');
}

export default function TibiaoriginsWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-with-reviews-server-brazil" />;
}
