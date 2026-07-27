import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nostalther-official');
}

export default function WithDiscordNostaltherOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nostalther-official" />;
}
