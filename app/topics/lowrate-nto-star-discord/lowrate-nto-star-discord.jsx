import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nto-star-discord');
}

export default function LowrateNtoStarDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nto-star-discord" />;
}
