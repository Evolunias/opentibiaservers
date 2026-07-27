import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-guilds');
}

export default function RubinotGuildsKeywordPage() {
  return <StaticKeywordPage slug="rubinot-guilds" />;
}
