import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-canob-online');
}

export default function WithDiscordCanobOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-canob-online" />;
}
