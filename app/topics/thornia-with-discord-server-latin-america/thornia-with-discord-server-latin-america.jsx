import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-discord-server-latin-america');
}

export default function ThorniaWithDiscordServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-discord-server-latin-america" />;
}
