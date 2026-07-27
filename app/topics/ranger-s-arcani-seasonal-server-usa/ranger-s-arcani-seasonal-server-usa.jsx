import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-seasonal-server-usa');
}

export default function RangerSArcaniSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-seasonal-server-usa" />;
}
