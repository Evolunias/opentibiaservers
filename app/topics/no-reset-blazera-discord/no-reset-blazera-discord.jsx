import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-blazera-discord');
}

export default function NoResetBlazeraDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-blazera-discord" />;
}
