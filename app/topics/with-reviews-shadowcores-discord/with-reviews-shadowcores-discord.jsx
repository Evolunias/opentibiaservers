import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-shadowcores-discord');
}

export default function WithReviewsShadowcoresDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-shadowcores-discord" />;
}
