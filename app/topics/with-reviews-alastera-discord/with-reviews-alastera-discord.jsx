import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-alastera-discord');
}

export default function WithReviewsAlasteraDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-alastera-discord" />;
}
