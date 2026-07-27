import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-with-active-players-server-north-america');
}

export default function RangerSArcaniWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-with-active-players-server-north-america" />;
}
