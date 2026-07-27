import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-medivia-online');
}

export default function WithDiscordMediviaOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-medivia-online" />;
}
