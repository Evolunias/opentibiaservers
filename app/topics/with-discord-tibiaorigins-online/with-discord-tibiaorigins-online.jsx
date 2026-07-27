import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiaorigins-online');
}

export default function WithDiscordTibiaoriginsOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiaorigins-online" />;
}
