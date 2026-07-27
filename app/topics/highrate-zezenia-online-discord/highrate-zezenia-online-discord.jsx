import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-zezenia-online-discord');
}

export default function HighrateZezeniaOnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-zezenia-online-discord" />;
}
