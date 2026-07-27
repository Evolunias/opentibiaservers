import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-yurots-discord');
}

export default function NoResetYurotsDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-yurots-discord" />;
}
