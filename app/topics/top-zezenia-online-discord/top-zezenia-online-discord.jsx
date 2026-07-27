import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-zezenia-online-discord');
}

export default function TopZezeniaOnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-zezenia-online-discord" />;
}
