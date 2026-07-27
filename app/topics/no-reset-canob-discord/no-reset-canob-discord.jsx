import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-canob-discord');
}

export default function NoResetCanobDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-canob-discord" />;
}
