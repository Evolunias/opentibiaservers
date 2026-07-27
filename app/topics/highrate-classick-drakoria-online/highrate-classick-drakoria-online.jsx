import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-classick-drakoria-online');
}

export default function HighrateClassickDrakoriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-classick-drakoria-online" />;
}
