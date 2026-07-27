import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-discord');
}

export default function DuraOnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="dura-online-discord" />;
}
