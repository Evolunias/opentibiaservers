import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-with-discord-server-latin-america');
}

export default function SerenityWithDiscordServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-with-discord-server-latin-america" />;
}
