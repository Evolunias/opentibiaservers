import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nto-star-discord');
}

export default function TopNtoStarDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-nto-star-discord" />;
}
