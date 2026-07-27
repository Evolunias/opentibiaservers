import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-carlinot-discord');
}

export default function NoResetCarlinotDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-carlinot-discord" />;
}
