import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-with-reviews-server-germany');
}

export default function TibiaoriginsWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-with-reviews-server-germany" />;
}
