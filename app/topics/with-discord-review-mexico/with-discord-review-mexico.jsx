import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-review-mexico');
}

export default function WithDiscordReviewMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-discord-review-mexico" />;
}
