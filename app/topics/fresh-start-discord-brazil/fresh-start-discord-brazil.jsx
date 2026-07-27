import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-discord-brazil');
}

export default function FreshStartDiscordBrazilKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-discord-brazil" />;
}
