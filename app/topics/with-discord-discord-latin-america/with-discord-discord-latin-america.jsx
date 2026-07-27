import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-discord-latin-america');
}

export default function WithDiscordDiscordLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-discord-latin-america" />;
}
