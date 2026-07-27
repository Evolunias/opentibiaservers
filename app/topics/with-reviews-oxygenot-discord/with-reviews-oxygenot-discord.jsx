import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-oxygenot-discord');
}

export default function WithReviewsOxygenotDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-oxygenot-discord" />;
}
