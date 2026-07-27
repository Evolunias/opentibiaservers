import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-discord-mexico');
}

export default function FreshStartDiscordMexicoKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-discord-mexico" />;
}
