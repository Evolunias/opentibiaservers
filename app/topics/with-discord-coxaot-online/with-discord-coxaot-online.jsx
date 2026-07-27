import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-coxaot-online');
}

export default function WithDiscordCoxaotOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-coxaot-online" />;
}
