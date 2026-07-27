import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-with-discord-server-europe');
}

export default function VenoreotWithDiscordServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="venoreot-with-discord-server-europe" />;
}
