import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-discord-server-north-america');
}

export default function RubinotWithDiscordServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-discord-server-north-america" />;
}
