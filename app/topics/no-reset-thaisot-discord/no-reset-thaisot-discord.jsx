import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-thaisot-discord');
}

export default function NoResetThaisotDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-thaisot-discord" />;
}
