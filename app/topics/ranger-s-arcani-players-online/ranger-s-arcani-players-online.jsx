import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-players-online');
}

export default function RangerSArcaniPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-players-online" />;
}
