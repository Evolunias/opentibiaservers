import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-arcaniarl-online');
}

export default function HighrateArcaniarlOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-arcaniarl-online" />;
}
