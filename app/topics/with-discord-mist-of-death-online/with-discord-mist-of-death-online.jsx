import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-mist-of-death-online');
}

export default function WithDiscordMistOfDeathOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-mist-of-death-online" />;
}
