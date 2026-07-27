import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-demolidores-discord');
}

export default function WithReviewsDemolidoresDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-demolidores-discord" />;
}
