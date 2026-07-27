import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ruthless-chaos-discord');
}

export default function WithReviewsRuthlessChaosDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ruthless-chaos-discord" />;
}
