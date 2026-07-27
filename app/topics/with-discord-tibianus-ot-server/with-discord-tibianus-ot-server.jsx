import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibianus-ot-server');
}

export default function WithDiscordTibianusOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibianus-ot-server" />;
}
