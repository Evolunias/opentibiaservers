import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-review-argentina');
}

export default function WithDiscordReviewArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-review-argentina" />;
}
