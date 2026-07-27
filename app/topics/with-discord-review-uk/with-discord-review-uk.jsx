import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-review-uk');
}

export default function WithDiscordReviewUkKeywordPage() {
  return <StaticKeywordPage slug="with-discord-review-uk" />;
}
