import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-with-discord-server-germany');
}

export default function VenoreotWithDiscordServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="venoreot-with-discord-server-germany" />;
}
