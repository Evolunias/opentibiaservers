import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-mist-of-death-official');
}

export default function WithDiscordMistOfDeathOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-mist-of-death-official" />;
}
