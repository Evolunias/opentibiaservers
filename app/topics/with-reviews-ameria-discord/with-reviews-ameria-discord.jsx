import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ameria-discord');
}

export default function WithReviewsAmeriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ameria-discord" />;
}
