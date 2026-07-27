import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-saintsot-discord');
}

export default function WithReviewsSaintsotDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-saintsot-discord" />;
}
