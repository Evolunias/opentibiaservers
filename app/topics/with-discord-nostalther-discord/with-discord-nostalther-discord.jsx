import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nostalther-discord');
}

export default function WithDiscordNostaltherDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nostalther-discord" />;
}
