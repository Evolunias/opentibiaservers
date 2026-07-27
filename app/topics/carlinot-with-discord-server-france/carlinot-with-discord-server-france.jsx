import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-discord-server-france');
}

export default function CarlinotWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-discord-server-france" />;
}
