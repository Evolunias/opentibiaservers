import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-with-discord-server-north-america');
}

export default function VenoreotWithDiscordServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-with-discord-server-north-america" />;
}
