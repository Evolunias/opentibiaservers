import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-dura-online-discord');
}

export default function BestDuraOnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-dura-online-discord" />;
}
