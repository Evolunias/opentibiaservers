import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-zezenia-online-discord');
}

export default function BestZezeniaOnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-zezenia-online-discord" />;
}
