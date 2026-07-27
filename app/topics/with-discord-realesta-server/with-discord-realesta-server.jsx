import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-realesta-server');
}

export default function WithDiscordRealestaServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-realesta-server" />;
}
