import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-serenity-website');
}

export default function WithReviewsSerenityWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-serenity-website" />;
}
