import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-season');
}

export default function RangerSArcaniSeasonKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-season" />;
}
