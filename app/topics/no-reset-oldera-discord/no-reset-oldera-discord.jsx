import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-oldera-discord');
}

export default function NoResetOlderaDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-oldera-discord" />;
}
