import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-discord-latin-america');
}

export default function FreshStartDiscordLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-discord-latin-america" />;
}
