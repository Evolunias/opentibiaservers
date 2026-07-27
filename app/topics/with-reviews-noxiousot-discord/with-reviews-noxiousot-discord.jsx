import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-noxiousot-discord');
}

export default function WithReviewsNoxiousotDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-noxiousot-discord" />;
}
