import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-otmadness-discord');
}

export default function WithReviewsOtmadnessDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-otmadness-discord" />;
}
