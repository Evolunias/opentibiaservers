import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-rubinot-discord');
}

export default function OfficialRubinotDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-rubinot-discord" />;
}
