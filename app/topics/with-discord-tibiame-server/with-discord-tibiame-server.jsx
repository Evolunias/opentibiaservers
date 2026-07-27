import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiame-server');
}

export default function WithDiscordTibiameServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiame-server" />;
}
