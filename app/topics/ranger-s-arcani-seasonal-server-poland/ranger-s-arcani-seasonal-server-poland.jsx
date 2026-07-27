import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-seasonal-server-poland');
}

export default function RangerSArcaniSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-seasonal-server-poland" />;
}
