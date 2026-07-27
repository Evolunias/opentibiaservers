import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-discord-server-latin-america');
}

export default function TibiaraWithDiscordServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-discord-server-latin-america" />;
}
