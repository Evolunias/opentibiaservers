import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-luminera-website');
}

export default function WithReviewsLumineraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-luminera-website" />;
}
