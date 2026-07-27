import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-madnessalive-discord');
}

export default function WithReviewsMadnessaliveDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-madnessalive-discord" />;
}
