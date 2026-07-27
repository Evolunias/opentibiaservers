import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-review-sweden');
}

export default function WithDiscordReviewSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-discord-review-sweden" />;
}
