import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-zezenia-online-discord');
}

export default function CurrentZezeniaOnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-zezenia-online-discord" />;
}
