import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-serenity-online');
}

export default function WithDiscordSerenityOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-serenity-online" />;
}
