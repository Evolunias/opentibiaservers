import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nto-star-online');
}

export default function HighrateNtoStarOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-nto-star-online" />;
}
