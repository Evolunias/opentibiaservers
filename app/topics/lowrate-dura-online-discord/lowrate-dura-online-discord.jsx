import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-dura-online-discord');
}

export default function LowrateDuraOnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-dura-online-discord" />;
}
