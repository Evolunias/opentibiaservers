import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nostalther-private-server');
}

export default function WithDiscordNostaltherPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nostalther-private-server" />;
}
