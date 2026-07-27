import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-eldera-discord');
}

export default function NoResetElderaDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-eldera-discord" />;
}
