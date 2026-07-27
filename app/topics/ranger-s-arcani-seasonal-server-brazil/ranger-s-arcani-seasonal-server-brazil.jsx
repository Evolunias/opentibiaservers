import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-seasonal-server-brazil');
}

export default function RangerSArcaniSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-seasonal-server-brazil" />;
}
