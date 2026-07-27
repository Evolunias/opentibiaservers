import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-with-discord-server-france');
}

export default function ImperianicWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="imperianic-with-discord-server-france" />;
}
