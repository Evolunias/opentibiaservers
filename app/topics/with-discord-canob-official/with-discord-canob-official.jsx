import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-canob-official');
}

export default function WithDiscordCanobOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-canob-official" />;
}
