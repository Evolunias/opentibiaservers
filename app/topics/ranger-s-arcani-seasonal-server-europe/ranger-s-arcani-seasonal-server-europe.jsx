import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-seasonal-server-europe');
}

export default function RangerSArcaniSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-seasonal-server-europe" />;
}
