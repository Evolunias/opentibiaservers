import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nostalther-discord');
}

export default function WithReviewsNostaltherDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nostalther-discord" />;
}
