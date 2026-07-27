import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('renera-players');
}

export default function ReneraPlayersKeywordPage() {
  return <StaticKeywordPage slug="renera-players" />;
}
