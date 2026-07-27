import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-review-europe');
}

export default function WithDiscordReviewEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-discord-review-europe" />;
}
