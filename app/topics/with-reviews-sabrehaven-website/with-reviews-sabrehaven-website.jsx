import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-sabrehaven-website');
}

export default function WithReviewsSabrehavenWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-sabrehaven-website" />;
}
