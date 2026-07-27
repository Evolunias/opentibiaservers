import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-unline-discord');
}

export default function NoResetUnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-unline-discord" />;
}
