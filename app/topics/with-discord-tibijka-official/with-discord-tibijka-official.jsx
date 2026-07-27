import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibijka-official');
}

export default function WithDiscordTibijkaOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibijka-official" />;
}
