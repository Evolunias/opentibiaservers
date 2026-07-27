import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-midhem-discord');
}

export default function NoResetMidhemDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-midhem-discord" />;
}
