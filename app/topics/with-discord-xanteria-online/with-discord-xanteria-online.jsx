import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-xanteria-online');
}

export default function WithDiscordXanteriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-xanteria-online" />;
}
