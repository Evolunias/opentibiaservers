import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-dura-online-discord');
}

export default function CurrentDuraOnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-dura-online-discord" />;
}
