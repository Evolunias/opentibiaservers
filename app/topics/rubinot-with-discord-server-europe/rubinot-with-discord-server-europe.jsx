import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-discord-server-europe');
}

export default function RubinotWithDiscordServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-discord-server-europe" />;
}
