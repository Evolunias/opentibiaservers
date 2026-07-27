import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-zezenia-online-online');
}

export default function HighrateZezeniaOnlineOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-zezenia-online-online" />;
}
