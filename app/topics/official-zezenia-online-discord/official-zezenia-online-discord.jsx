import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-zezenia-online-discord');
}

export default function OfficialZezeniaOnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-zezenia-online-discord" />;
}
