import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiara-discord');
}

export default function NoResetTibiaraDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiara-discord" />;
}
