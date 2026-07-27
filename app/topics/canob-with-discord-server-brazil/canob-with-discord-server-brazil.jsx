import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-discord-server-brazil');
}

export default function CanobWithDiscordServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="canob-with-discord-server-brazil" />;
}
