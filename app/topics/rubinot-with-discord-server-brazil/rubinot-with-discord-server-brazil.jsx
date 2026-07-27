import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-discord-server-brazil');
}

export default function RubinotWithDiscordServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-discord-server-brazil" />;
}
