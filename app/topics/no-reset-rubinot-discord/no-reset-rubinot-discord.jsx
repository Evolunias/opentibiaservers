import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-rubinot-discord');
}

export default function NoResetRubinotDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-rubinot-discord" />;
}
