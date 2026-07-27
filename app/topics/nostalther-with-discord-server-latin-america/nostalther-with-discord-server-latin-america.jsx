import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-with-discord-server-latin-america');
}

export default function NostaltherWithDiscordServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-with-discord-server-latin-america" />;
}
