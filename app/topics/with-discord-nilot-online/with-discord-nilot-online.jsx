import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nilot-online');
}

export default function WithDiscordNilotOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nilot-online" />;
}
