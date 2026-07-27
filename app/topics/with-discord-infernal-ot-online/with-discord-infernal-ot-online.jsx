import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-infernal-ot-online');
}

export default function WithDiscordInfernalOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-infernal-ot-online" />;
}
