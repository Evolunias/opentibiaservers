import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-dura-online-discord');
}

export default function FreshStartDuraOnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-dura-online-discord" />;
}
