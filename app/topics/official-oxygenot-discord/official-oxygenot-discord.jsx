import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-oxygenot-discord');
}

export default function OfficialOxygenotDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-oxygenot-discord" />;
}
