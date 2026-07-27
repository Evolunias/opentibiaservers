import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-kasteria-discord');
}

export default function NoResetKasteriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-kasteria-discord" />;
}
