import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nto-star-discord');
}

export default function WithDiscordNtoStarDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nto-star-discord" />;
}
