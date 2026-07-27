import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-with-reviews-server-usa');
}

export default function TibiaoriginsWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-with-reviews-server-usa" />;
}
