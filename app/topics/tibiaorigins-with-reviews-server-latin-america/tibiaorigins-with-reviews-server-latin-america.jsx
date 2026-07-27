import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-with-reviews-server-latin-america');
}

export default function TibiaoriginsWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-with-reviews-server-latin-america" />;
}
