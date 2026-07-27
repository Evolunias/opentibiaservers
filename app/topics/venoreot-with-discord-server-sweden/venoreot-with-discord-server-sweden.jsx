import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-with-discord-server-sweden');
}

export default function VenoreotWithDiscordServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="venoreot-with-discord-server-sweden" />;
}
