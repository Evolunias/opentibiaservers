import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-discord-server-poland');
}

export default function RubinotWithDiscordServerPolandKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-discord-server-poland" />;
}
