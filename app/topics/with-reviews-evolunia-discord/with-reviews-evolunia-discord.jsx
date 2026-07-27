import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-evolunia-discord');
}

export default function WithReviewsEvoluniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-evolunia-discord" />;
}
