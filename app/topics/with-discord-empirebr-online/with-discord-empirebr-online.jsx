import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-empirebr-online');
}

export default function WithDiscordEmpirebrOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-empirebr-online" />;
}
