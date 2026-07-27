import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nostalther-client');
}

export default function WithDiscordNostaltherClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nostalther-client" />;
}
