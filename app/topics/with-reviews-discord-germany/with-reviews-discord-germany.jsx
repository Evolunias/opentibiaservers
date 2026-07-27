import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-discord-germany');
}

export default function WithReviewsDiscordGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-discord-germany" />;
}
