import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-zezenia-online-discord');
}

export default function PopularZezeniaOnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-zezenia-online-discord" />;
}
