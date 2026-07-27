import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-empirebr-discord');
}

export default function WithReviewsEmpirebrDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-empirebr-discord" />;
}
