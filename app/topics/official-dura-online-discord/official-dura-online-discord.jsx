import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-dura-online-discord');
}

export default function OfficialDuraOnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-dura-online-discord" />;
}
