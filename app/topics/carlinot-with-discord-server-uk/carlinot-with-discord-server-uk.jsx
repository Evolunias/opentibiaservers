import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-discord-server-uk');
}

export default function CarlinotWithDiscordServerUkKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-discord-server-uk" />;
}
