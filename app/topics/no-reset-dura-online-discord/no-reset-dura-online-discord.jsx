import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-dura-online-discord');
}

export default function NoResetDuraOnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-dura-online-discord" />;
}
