import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nto-star-discord');
}

export default function BestNtoStarDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-nto-star-discord" />;
}
