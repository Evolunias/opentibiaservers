import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-infernal-ot-discord');
}

export default function WithReviewsInfernalOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-infernal-ot-discord" />;
}
