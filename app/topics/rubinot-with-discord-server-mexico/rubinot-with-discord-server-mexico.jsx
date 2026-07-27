import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-discord-server-mexico');
}

export default function RubinotWithDiscordServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-discord-server-mexico" />;
}
