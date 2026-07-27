import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-originaltibia-discord');
}

export default function NoResetOriginaltibiaDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-originaltibia-discord" />;
}
