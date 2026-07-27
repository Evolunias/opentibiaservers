import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-realesta-online');
}

export default function HighrateRealestaOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-realesta-online" />;
}
