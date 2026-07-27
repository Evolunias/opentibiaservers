import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-review-usa');
}

export default function WithDiscordReviewUsaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-review-usa" />;
}
