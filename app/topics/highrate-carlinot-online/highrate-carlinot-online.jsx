import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-carlinot-online');
}

export default function HighrateCarlinotOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-carlinot-online" />;
}
