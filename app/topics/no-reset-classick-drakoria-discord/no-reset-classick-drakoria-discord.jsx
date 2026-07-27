import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-classick-drakoria-discord');
}

export default function NoResetClassickDrakoriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-classick-drakoria-discord" />;
}
