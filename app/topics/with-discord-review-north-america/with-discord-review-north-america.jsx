import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-review-north-america');
}

export default function WithDiscordReviewNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-review-north-america" />;
}
