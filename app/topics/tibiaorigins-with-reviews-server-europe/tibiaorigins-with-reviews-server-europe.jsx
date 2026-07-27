import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-with-reviews-server-europe');
}

export default function TibiaoriginsWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-with-reviews-server-europe" />;
}
