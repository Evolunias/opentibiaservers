import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-imperianic-online');
}

export default function HighrateImperianicOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-imperianic-online" />;
}
