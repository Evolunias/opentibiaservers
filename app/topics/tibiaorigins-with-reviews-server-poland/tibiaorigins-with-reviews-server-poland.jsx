import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-with-reviews-server-poland');
}

export default function TibiaoriginsWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-with-reviews-server-poland" />;
}
