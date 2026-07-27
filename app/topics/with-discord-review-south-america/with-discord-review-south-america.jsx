import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-review-south-america');
}

export default function WithDiscordReviewSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-review-south-america" />;
}
