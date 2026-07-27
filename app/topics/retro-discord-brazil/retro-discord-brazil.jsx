import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-discord-brazil');
}

export default function RetroDiscordBrazilKeywordPage() {
  return <StaticKeywordPage slug="retro-discord-brazil" />;
}
