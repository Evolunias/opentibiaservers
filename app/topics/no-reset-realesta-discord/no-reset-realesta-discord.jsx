import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-realesta-discord');
}

export default function NoResetRealestaDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-realesta-discord" />;
}
