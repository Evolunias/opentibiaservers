import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-13-seasonal-server');
}

export default function RangerSArcani13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-13-seasonal-server" />;
}
