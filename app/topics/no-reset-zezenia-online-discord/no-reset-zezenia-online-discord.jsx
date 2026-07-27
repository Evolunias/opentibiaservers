import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-zezenia-online-discord');
}

export default function NoResetZezeniaOnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-zezenia-online-discord" />;
}
