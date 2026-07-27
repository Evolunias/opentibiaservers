import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nto-star-discord');
}

export default function CurrentNtoStarDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-nto-star-discord" />;
}
