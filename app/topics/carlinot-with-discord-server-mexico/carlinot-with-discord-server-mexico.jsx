import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-discord-server-mexico');
}

export default function CarlinotWithDiscordServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-discord-server-mexico" />;
}
