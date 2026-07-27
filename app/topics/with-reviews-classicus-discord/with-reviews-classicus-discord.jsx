import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-classicus-discord');
}

export default function WithReviewsClassicusDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-classicus-discord" />;
}
