import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-discord-brazil');
}

export default function WithReviewsDiscordBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-discord-brazil" />;
}
