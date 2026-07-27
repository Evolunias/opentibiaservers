import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-with-discord-server-poland');
}

export default function VenoreotWithDiscordServerPolandKeywordPage() {
  return <StaticKeywordPage slug="venoreot-with-discord-server-poland" />;
}
