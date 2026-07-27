import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-kasteria-official');
}

export default function WithDiscordKasteriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-kasteria-official" />;
}
