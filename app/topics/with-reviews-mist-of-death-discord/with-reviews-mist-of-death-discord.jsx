import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-mist-of-death-discord');
}

export default function WithReviewsMistOfDeathDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-mist-of-death-discord" />;
}
