import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-dura-online-discord');
}

export default function PopularDuraOnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-dura-online-discord" />;
}
