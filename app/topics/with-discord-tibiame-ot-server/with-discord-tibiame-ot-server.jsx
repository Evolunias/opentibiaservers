import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiame-ot-server');
}

export default function WithDiscordTibiameOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiame-ot-server" />;
}
