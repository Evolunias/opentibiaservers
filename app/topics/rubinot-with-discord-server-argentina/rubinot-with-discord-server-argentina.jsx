import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-discord-server-argentina');
}

export default function RubinotWithDiscordServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-discord-server-argentina" />;
}
