import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-arcaniarl-discord');
}

export default function WithReviewsArcaniarlDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-arcaniarl-discord" />;
}
