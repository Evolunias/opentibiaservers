import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-harmonia-ot-online');
}

export default function WithDiscordHarmoniaOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-harmonia-ot-online" />;
}
