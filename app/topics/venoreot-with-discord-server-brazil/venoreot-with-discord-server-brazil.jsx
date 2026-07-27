import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-with-discord-server-brazil');
}

export default function VenoreotWithDiscordServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="venoreot-with-discord-server-brazil" />;
}
