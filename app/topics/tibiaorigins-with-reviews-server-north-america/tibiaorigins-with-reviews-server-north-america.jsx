import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-with-reviews-server-north-america');
}

export default function TibiaoriginsWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-with-reviews-server-north-america" />;
}
