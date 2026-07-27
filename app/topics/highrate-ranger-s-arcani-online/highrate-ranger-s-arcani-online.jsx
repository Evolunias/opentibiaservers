import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ranger-s-arcani-online');
}

export default function HighrateRangerSArcaniOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-ranger-s-arcani-online" />;
}
