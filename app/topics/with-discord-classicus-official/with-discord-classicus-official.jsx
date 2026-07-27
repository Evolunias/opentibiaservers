import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-classicus-official');
}

export default function WithDiscordClassicusOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-classicus-official" />;
}
