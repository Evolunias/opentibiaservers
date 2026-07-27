import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-dura-online-discord');
}

export default function ActiveDuraOnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-dura-online-discord" />;
}
