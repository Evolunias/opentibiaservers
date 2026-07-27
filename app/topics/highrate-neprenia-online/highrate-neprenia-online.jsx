import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-neprenia-online');
}

export default function HighrateNepreniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-neprenia-online" />;
}
