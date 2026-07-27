import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-discord-server-uk');
}

export default function RubinotWithDiscordServerUkKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-discord-server-uk" />;
}
