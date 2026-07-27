import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-rookgaard-tales-discord');
}

export default function WithReviewsRookgaardTalesDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-rookgaard-tales-discord" />;
}
