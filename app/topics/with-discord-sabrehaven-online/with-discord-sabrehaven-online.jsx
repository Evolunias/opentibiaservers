import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-sabrehaven-online');
}

export default function WithDiscordSabrehavenOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-sabrehaven-online" />;
}
