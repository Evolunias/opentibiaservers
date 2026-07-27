import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiara-ot-server');
}

export default function WithDiscordTibiaraOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiara-ot-server" />;
}
