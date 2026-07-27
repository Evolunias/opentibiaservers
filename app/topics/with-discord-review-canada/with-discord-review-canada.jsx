import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-review-canada');
}

export default function WithDiscordReviewCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-review-canada" />;
}
