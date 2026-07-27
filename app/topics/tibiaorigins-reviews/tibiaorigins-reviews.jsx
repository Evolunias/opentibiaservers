import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-reviews');
}

export default function TibiaoriginsReviewsKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-reviews" />;
}
