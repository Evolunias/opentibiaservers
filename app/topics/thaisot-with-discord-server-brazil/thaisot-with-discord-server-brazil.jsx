import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-discord-server-brazil');
}

export default function ThaisotWithDiscordServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-discord-server-brazil" />;
}
