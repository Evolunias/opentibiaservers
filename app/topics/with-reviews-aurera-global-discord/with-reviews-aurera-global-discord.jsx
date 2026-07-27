import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-aurera-global-discord');
}

export default function WithReviewsAureraGlobalDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-aurera-global-discord" />;
}
