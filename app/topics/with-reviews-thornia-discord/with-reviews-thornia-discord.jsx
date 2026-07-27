import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-thornia-discord');
}

export default function WithReviewsThorniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-thornia-discord" />;
}
