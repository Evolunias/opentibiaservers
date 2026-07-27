import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-cyntara-discord');
}

export default function NoResetCyntaraDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-cyntara-discord" />;
}
