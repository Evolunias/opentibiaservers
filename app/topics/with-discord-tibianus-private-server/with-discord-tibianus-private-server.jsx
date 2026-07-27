import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibianus-private-server');
}

export default function WithDiscordTibianusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibianus-private-server" />;
}
