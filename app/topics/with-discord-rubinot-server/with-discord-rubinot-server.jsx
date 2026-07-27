import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-rubinot-server');
}

export default function WithDiscordRubinotServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-rubinot-server" />;
}
