import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-discord-server-sweden');
}

export default function CarlinotWithDiscordServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-discord-server-sweden" />;
}
