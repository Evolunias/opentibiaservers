import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-venoreot-online');
}

export default function HighrateVenoreotOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-venoreot-online" />;
}
