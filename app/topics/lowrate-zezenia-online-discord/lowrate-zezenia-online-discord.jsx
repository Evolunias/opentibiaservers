import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-zezenia-online-discord');
}

export default function LowrateZezeniaOnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-zezenia-online-discord" />;
}
