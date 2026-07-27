import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-discord-server-france');
}

export default function RubinotWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-discord-server-france" />;
}
