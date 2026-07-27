import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-thaisot-discord');
}

export default function WithReviewsThaisotDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-thaisot-discord" />;
}
