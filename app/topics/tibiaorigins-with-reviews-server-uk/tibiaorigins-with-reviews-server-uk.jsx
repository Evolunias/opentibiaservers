import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-with-reviews-server-uk');
}

export default function TibiaoriginsWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-with-reviews-server-uk" />;
}
