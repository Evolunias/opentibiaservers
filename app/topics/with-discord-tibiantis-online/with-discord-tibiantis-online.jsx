import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiantis-online');
}

export default function WithDiscordTibiantisOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiantis-online" />;
}
