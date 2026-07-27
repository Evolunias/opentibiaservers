import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-review-latin-america');
}

export default function WithDiscordReviewLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-review-latin-america" />;
}
