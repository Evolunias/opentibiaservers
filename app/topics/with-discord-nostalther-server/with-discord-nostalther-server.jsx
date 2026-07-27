import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nostalther-server');
}

export default function WithDiscordNostaltherServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nostalther-server" />;
}
