import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiaretro-online');
}

export default function WithDiscordTibiaretroOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiaretro-online" />;
}
