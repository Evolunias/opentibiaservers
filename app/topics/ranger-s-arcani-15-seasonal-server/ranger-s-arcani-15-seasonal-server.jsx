import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-15-seasonal-server');
}

export default function RangerSArcani15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-15-seasonal-server" />;
}
