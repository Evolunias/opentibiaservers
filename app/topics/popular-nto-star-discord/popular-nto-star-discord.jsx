import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nto-star-discord');
}

export default function PopularNtoStarDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-nto-star-discord" />;
}
