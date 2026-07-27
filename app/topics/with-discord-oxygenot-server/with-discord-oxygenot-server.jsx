import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-oxygenot-server');
}

export default function WithDiscordOxygenotServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-oxygenot-server" />;
}
