import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiame-discord');
}

export default function WithReviewsTibiameDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiame-discord" />;
}
