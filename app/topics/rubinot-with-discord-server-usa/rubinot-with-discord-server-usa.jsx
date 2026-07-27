import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-discord-server-usa');
}

export default function RubinotWithDiscordServerUsaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-discord-server-usa" />;
}
