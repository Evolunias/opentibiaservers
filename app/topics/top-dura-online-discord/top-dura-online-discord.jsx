import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-dura-online-discord');
}

export default function TopDuraOnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-dura-online-discord" />;
}
