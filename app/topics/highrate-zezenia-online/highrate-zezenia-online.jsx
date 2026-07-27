import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-zezenia-online');
}

export default function HighrateZezeniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-zezenia-online" />;
}
