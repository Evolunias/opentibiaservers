import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-rubinot-discord');
}

export default function WithReviewsRubinotDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-rubinot-discord" />;
}
