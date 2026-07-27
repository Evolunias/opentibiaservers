import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nostalther');
}

export default function WithDiscordNostaltherKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nostalther" />;
}
