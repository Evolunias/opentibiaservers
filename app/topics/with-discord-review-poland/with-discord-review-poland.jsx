import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-review-poland');
}

export default function WithDiscordReviewPolandKeywordPage() {
  return <StaticKeywordPage slug="with-discord-review-poland" />;
}
