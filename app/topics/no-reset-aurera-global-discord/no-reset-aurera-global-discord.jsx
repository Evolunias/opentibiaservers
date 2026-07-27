import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-aurera-global-discord');
}

export default function NoResetAureraGlobalDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-aurera-global-discord" />;
}
