import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-zezenia-online-discord');
}

export default function FreshStartZezeniaOnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-zezenia-online-discord" />;
}
