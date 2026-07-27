import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-yurots-server');
}

export default function WithDiscordYurotsServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-yurots-server" />;
}
