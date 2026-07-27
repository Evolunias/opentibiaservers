import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-discord-usa');
}

export default function FreshStartDiscordUsaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-discord-usa" />;
}
