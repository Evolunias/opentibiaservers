import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-thornia-official');
}

export default function WithDiscordThorniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-thornia-official" />;
}
