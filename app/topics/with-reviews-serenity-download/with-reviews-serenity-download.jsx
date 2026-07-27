import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-serenity-download');
}

export default function WithReviewsSerenityDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-serenity-download" />;
}
