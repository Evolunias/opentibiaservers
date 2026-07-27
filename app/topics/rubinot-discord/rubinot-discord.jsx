import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-discord');
}

export default function RubinotDiscordKeywordPage() {
  return <StaticKeywordPage slug="rubinot-discord" />;
}
