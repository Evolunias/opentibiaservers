import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-seasonal-server-germany');
}

export default function RangerSArcaniSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-seasonal-server-germany" />;
}
