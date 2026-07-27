import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-oxygenot-discord');
}

export default function NoResetOxygenotDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-oxygenot-discord" />;
}
