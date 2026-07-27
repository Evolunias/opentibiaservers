import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-with-discord-server-argentina');
}

export default function VenoreotWithDiscordServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-with-discord-server-argentina" />;
}
