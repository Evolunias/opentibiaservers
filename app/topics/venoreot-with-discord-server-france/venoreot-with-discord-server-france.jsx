import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-with-discord-server-france');
}

export default function VenoreotWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="venoreot-with-discord-server-france" />;
}
