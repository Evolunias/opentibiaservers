import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-discord-server-latin-america');
}

export default function RealestaWithDiscordServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-discord-server-latin-america" />;
}
