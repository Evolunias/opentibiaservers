import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nilot-discord');
}

export default function NoResetNilotDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nilot-discord" />;
}
