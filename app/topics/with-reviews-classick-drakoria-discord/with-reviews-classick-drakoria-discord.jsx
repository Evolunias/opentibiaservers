import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-classick-drakoria-discord');
}

export default function WithReviewsClassickDrakoriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-classick-drakoria-discord" />;
}
