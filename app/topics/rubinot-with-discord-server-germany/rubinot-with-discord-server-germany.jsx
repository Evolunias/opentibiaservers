import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-discord-server-germany');
}

export default function RubinotWithDiscordServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-discord-server-germany" />;
}
