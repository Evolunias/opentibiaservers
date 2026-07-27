import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-seasonal-server-north-america');
}

export default function RangerSArcaniSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-seasonal-server-north-america" />;
}
