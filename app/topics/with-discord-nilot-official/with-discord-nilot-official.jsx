import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nilot-official');
}

export default function WithDiscordNilotOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nilot-official" />;
}
