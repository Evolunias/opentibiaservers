import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ameria-online');
}

export default function HighrateAmeriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-ameria-online" />;
}
