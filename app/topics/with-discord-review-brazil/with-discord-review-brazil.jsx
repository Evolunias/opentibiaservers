import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-review-brazil');
}

export default function WithDiscordReviewBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-discord-review-brazil" />;
}
