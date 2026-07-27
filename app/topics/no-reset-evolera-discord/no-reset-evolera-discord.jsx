import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-evolera-discord');
}

export default function NoResetEvoleraDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-evolera-discord" />;
}
